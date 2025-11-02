<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PlayerEvaluationRequest extends FormRequest
{
    public function rules()
    {
        return [
            'player_id' => 'required|exists:players,id',
            'coach_id' => 'required|exists:users,id',
            'evaluation_text' => 'required',
            'nota_geral' => 'nullable|integer|min:0|max:10',
        ];
    }
}
