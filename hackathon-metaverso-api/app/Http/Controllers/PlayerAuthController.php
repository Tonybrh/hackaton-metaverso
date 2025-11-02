<?php

namespace App\Http\Controllers;

use App\Http\Requests\PlayerRegisterRequest;
use App\Services\PlayerService;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class PlayerAuthController extends Controller
{
    public function __construct(
        private readonly PlayerService $playerService
    ){
    }

    public function register(PlayerRegisterRequest $request): JsonResponse
    {
        $player = $this->playerService->register($request->validated());

        return response()->json([
            'message' => 'Jogador registrado com sucesso. Um e-mail foi enviado para criar a senha.',
            'player' => $player
        ], 201);
    }

    public function resetPassword(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'password' => 'required|string|min:8',
            'email' => 'required|email',
            'token' => 'required|string',
        ]);

        $this->playerService->resetPassword($validated);

        return response()->json([
            'message' => 'Senha redefinida com sucesso.'
        ]);
    }
}
