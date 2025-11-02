<?php

use App\Http\Controllers\ChatController;
use App\Http\Controllers\CoachAuthController;
use App\Http\Controllers\PlayerAuthController;
use Illuminate\Support\Facades\Route;


Route::prefix('/coach')->group(function (){
    Route::post('/login', [CoachAuthController::class, 'login']);
    Route::post('/register', [CoachAuthController::class, 'register']);
    Route::middleware(['auth:sanctum', 'role:coach'])->group(function () {
        Route::post('/logout', [CoachAuthController::class, 'logout']);
        Route::get('/profile', [CoachAuthController::class, 'profile']);
        Route::get('{coach}/players', [CoachAuthController::class, 'getPlayers']);
    });
});

Route::prefix('/player')->middleware(['auth:sanctum', 'role:coach'])->group(function (){
    Route::post('/register', [PlayerAuthController::class, 'register']);
    Route::post('/evaluations', [\App\Http\Controllers\PlayerEvaluationController::class, 'store']);
    Route::post('/redefinir-senha', [PlayerAuthController::class, 'resetPassword']);
});

Route::prefix('chats')->middleware(['auth:sanctum', 'role:coach'])->group(function (){
    Route::post('/', [ChatController::class, 'create']);
    Route::post('{chat}/messages', [ChatController::class, 'sendMessage']);
    Route::post('/generate-insights/players/{player}', [ChatController::class, 'generateInsights']);
});
