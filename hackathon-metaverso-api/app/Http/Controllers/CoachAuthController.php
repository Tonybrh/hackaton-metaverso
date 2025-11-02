<?php

namespace App\Http\Controllers;

use App\Http\Requests\CoachLoginRequest;
use App\Http\Requests\CoachRegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Services\CoachAuthService;
use Illuminate\Http\Request;
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


    public function logout(Request $request): JsonResponse
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logout realizado com sucesso!']);
    }

    public function register(CoachRegisterRequest $request): JsonResponse
    {
        return response()->json(
            new UserResource($this->coachAuthService->register($request->validated()))
        );
    }

    public function getPlayers(User $coach): JsonResponse
    {
        return response()->json($coach->players);
    }
}
