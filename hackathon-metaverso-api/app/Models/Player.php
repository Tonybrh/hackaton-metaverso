<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Player extends Model
{
    use Notifiable;
    use HasApiTokens;

    protected $fillable = [
        'name',
        'email',
        'user_id'
    ];
    public function coach(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
