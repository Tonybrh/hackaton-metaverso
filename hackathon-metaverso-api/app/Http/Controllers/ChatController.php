<?php

namespace App\Http\Controllers;

use App\Http\Requests\SendMessageRequest;
use App\Models\Chat;
use App\Services\ChatService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ChatController extends Controller
{
    public function __construct(private readonly ChatService $chatService)
    {
    }

    public function create(Request $request): JsonResponse
    {
        return response()->json(
            $this->chatService->create(auth()->user()->id),
            Response::HTTP_CREATED
        );
    }

    public function sendMessage(SendMessageRequest $request, Chat $chat): JsonResponse
    {
        return $this->chatService->answerChatMessage($chat, $request->validated()['message']);
    }

    public function generateInsights(Request $request): JsonResponse
    {
        return $this->chatService->generateInsights();
    }
}
