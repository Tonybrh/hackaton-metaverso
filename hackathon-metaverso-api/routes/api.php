<?php

\Illuminate\Support\Facades\Route::prefix('/coach')
    ->group(function (){
        Route::post('/login', [\App\Http\Controllers\CoachAuthController::class, 'login']);
        Route::post('/register', [\App\Http\Controllers\CoachAuthController::class, 'register']);
        Route::middleware(['jwt.auth','auth:coach'])->group(function () {
            Route::post('/logout', [\App\Http\Controllers\CoachAuthController::class, 'logout']);
            Route::get('/profile', [\App\Http\Controllers\CoachAuthController::class, 'profile']);
        });
    });
