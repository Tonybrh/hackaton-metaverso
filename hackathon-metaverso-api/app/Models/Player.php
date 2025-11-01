<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Player extends Model
{
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
