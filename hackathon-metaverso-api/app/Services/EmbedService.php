<?php

namespace App\Services;



use App\Clients\OpenAIClient;
use App\Models\PlayerEvaluation;
use Illuminate\Support\Facades\Log;

class EmbedService
{
    private const DEFAULT_EMBEDDING_MODEL = 'text-embedding-3-small';

    public function __construct(protected OpenAIClient $openAIClient)
    {
    }

    public function getContext(string $query, int $limit): array
    {
        $queryEmbedding = $this->generateEmbeddingFromText($query);
        if (!is_array($queryEmbedding) || empty($queryEmbedding)) {
            Log::warning('Erro na geração de embedding para query.', ['query' => $queryEmbedding]);
            return [];
        }
        $evaluationContexts = PlayerEvaluation::all(['embedding', 'evaluation_context']);

        $results = $evaluationContexts->map(function ($doc) use ($queryEmbedding) {
            $embedding = json_decode($doc['embedding'], true);
            if (!is_array($embedding) || empty($embedding)) {
                return null;
            }

            $similarity = $this->cosineSimilarity($queryEmbedding, $embedding);
            return [
                'content' => $doc['content'],
                'similarity' => $similarity,
            ];

        });

        return $results
            ->filter()
            ->sortByDesc('similarity')
            ->take($limit)
            ->pluck('content')
            ->toArray();
    }

    protected function generateEmbeddingFromText(string $text): ?array
    {
        return $this->openAIClient
            ->generateEmbeddings($text, self::DEFAULT_EMBEDDING_MODEL)['data'][0]['embedding'];
    }


    protected function cosineSimilarity(array $vecA, array $vecB): float
    {
        $dotProduct = 0.0;
        $normA = 0.0;
        $normB = 0.0;

        foreach ($vecA as $i => $val) {
            $dotProduct += $val * $vecB[$i];
            $normA += $val ** 2;
            $normB += $vecB[$i] ** 2;
        }

        $normA = sqrt($normA);
        $normB = sqrt($normB);

        return $normA * $normB ? $dotProduct / ($normA * $normB) : 0.0;
    }
}
