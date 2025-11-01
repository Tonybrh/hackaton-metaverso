<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class CoachAuthService
{
    public function login(array $credentials): JsonResponse
    {
        if (!auth()->attempt($credentials)) {
            return response()->json(['message' => 'Credenciais inválidas'], 401);
        }

        $coach = auth()->user();
        $token = $coach->createToken('coach-token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'coach' => $coach,
        ]);
    }

    public function register(array $credentials): User
    {
        $user = User::create($credentials);
        $user->assignRole('coach');

        return $user;
    }
}
