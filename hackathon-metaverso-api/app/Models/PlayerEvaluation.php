<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlayerEvaluation extends Model
{
    protected $fillable = [
        'player_id',
        'coach_id',
        'evaluation_text',
        'embedding',
        'nota_geral',
    ];

    protected $casts = [
        'embedding' => 'array',
    ];
}
