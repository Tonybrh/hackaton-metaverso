<?php

namespace App\Http\Controllers;

use App\Http\Requests\CoachLoginRequest;
use App\Http\Requests\CoachRegisterRequest;
use App\Services\CoachAuthService;
use Symfony\Component\HttpFoundation\JsonResponse;

class CoachAuthController
{
    public function __construct(
        private readonly CoachAuthService $coachAuthService
    ) {
    }

    public function login(CoachLoginRequest $request)
    {
        return $this->coachAuthService->login($request->only(['email', 'password']));
    }

    public function register(CoachRegisterRequest $request): JsonResponse
    {
        return response()->json($this->coachAuthService->register($request->validated()));
    }
}
