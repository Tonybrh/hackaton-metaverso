<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PlayerRegisterRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:players,email',
            'user_id' => 'required|exists:users,id',
            'puuid' => 'required|unique:players,puuid',
        ];
    }
}
