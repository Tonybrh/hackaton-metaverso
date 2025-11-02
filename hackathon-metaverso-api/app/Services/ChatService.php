<?php

namespace App\Services;

use App\Clients\OpenAIClient;
use App\Models\Chat;
use App\Models\ChatMessage;
use App\Models\MatchData;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;

class ChatService
{
    private const DEFAULT_MODEL = 'gpt-4.1-mini';

    public function __construct(private readonly OpenAIClient $openAIClient)
    {
    }

    public function generateInsights(): JsonResponse
    {
        $response = $this->openAIClient->generateChatResponse(
            self::DEFAULT_MODEL,
            $this->buildInput((array)MatchData::all()),
            config('prompts.generate_insights')
        );

        $message = $this->concatResponse($response);
        return response()->json(['relatório' => $message]);
    }


    public function answerChatMessage(Chat $chat, string $message): JsonResponse
    {
        if (!$chat->title) {
            $chat->title = implode(' ', array_slice(explode(' ', $message), 0, 4));
            $chat->save();
        }

        $messages = $this->prepareContext($chat->id, $message);

        $response = $this->openAIClient->generateChatResponse(
            self::DEFAULT_MODEL,
            $messages,
        );

        $assistantMessage = $this->concatResponse($response);

        $this->createMessage([
            'chat_id' => $chat->id,
            'role' => 'user',
            'content' => $message
        ]);

        $this->createMessage([
            'chat_id' => $chat->id,
            'role' => 'assistant',
            'content' => $assistantMessage,
            'model' => self::DEFAULT_MODEL,
        ]);

        return response()->json([
            'message' => $assistantMessage,
        ]);
    }

    public function prepareContext(int $chatId, string $userMessage): array
    {
        $history = $this->getChatHistory($chatId);

        if (!$history->contains(fn($message) => $message->role === 'developer')) {
            $this->createMessage([
                'chat_id' => $chatId,
                'role' => 'developer',
                'content' => config('prompts.valorant_agent'),
            ]);
        }

        $messages = [];
        foreach ($history as $message) {
            $messages[] = [
                'role' => $message->role,
                'content' => $message->content,
            ];
        }
        $messages[] = [
            'role' => 'user',
            'content' => $userMessage,
        ];

        return $messages;
    }

    public function create(int $userId): Chat
    {
        return Chat::query()->create(['user_id' => $userId]);
    }
    private function buildInput(array $data): array
    {
        return [
            [
                'role' => 'user',
                'content' => [
                    [
                        'type' => 'input_text',
                        'text' => json_encode($data),
                    ]
                ]
            ]
        ];
    }


    protected function buildSystemMessage(array $contexts): array
    {
        return [
            'role' => 'developer',
            'content' =>
                "Use o seguinte contexto para responder, e responda em markdown SEM EMOJIS. " .
                "Use títulos, listas, **negrito**, *itálico* e quebras de linha (\\n) ao final de parágrafos e listas. " .
                "Nada mais que isso — apenas markdown básico:\n\n" .
                implode("\n\n---\n\n", $contexts),
        ];
    }

    private function concatResponse(array $response): string
    {
        return collect($response['output'])
            ->where('type', 'message')
            ->flatMap(function ($message) {
                return collect($message['content'])
                    ->pluck('text');
            })
            ->implode(" ");
    }


    private function createMessage(array $data): ChatMessage
    {
        return ChatMessage::query()->create($data);
    }

    private function getChatHistory(int $chatId): Collection
    {
        return ChatMessage::query()
            ->where('chat_id', $chatId)
            ->orderBy('created_at', 'asc')
            ->get();
    }

}
