<?php

namespace App\Http\Controllers;

use App\Http\Requests\PlayerEvaluationRequest;
use App\Services\PlayerEvaluationService;

class PlayerEvaluationController
{
    public function __construct(private readonly PlayerEvaluationService $playerEvaluationService) {}

    public function store(PlayerEvaluationRequest $request)
    {
        $data = $request->validated();
        $evaluation = $this->playerEvaluationService->store($data);

        return response()->json($evaluation, 201);
    }
}
