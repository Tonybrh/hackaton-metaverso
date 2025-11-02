<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MatchData extends Model
{
    protected $table = 'match_data';

    protected $fillable = [
        'match_info',
        'players',
        'round_results'
    ];

    protected $casts = [
        'match_info' => 'array',
        'players' => 'array',
        'round_results' => 'array'
    ];

}
