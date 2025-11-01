<?php

use App\Http\Controllers\CoachAuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('/coach')->group(function (){
        Route::post('/login', [CoachAuthController::class, 'login']);
        Route::post('/register', [CoachAuthController::class, 'register']);
        Route::middleware('auth:sanctum')->group(function () {
            Route::post('/logout', [CoachAuthController::class, 'logout']);
            Route::get('/profile', [CoachAuthController::class, 'profile']);
        });
    });
