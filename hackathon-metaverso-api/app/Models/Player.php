<?php

namespace App\Models;

use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Player extends Authenticatable
{
    use Notifiable;
    use HasApiTokens;
    use CanResetPassword;

    protected $fillable = [
        'name',
        'email',
        'user_id',
        'puuid',
    ];
    public function coach(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
