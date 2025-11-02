<?php

namespace App\Services;

use App\Models\Player;
use App\Notifications\PlayerNeedsPasswordNotification;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class PlayerService
{
    public function register(array $data): Player
    {
        $player = Player::create($data);
        $player->notify(new PlayerNeedsPasswordNotification());

        return $player;
    }

    public function resetPassword(array $credentials): void
    {
        $status = Password::reset(
            $credentials,
            function ($user) use ($credentials) {
                $user->forceFill([
                    'password' => Hash::make($credentials['password']),
                    'remember_token' => Str::random(60),
                ])->save();

                event(new PasswordReset($user));
            }
        );

        if ($status !== Password::PASSWORD_RESET) {
            throw new \Exception('Error on reset password', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
