<?php

namespace App\Services;

use App\Models\PlayerEvaluation;
use App\Clients\OpenAIClient;

class PlayerEvaluationService
{
    public function __construct(private readonly OpenAIClient $openAIClient) {}

    public function store(array $data)
    {
        $embedding = $this->openAIClient->generateEmbeddings($data['evaluation_text'], 'text-embedding-3-small');
        $data['embedding'] = $embedding['data'] ?? null;

        return PlayerEvaluation::create($data);
    }
}
