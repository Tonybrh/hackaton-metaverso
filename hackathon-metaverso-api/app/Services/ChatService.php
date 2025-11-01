<?php

namespace App\Services;

use App\Models\Chat;
use App\Models\ChatMessage;

class ChatService
{

    public function sendMessage(Chat $chat, array $messageData)
    {

    }

    private function createMessage(array $data): ChatMessage
    {
        return ChatMessage::query()->create($data);
    }

    private function create(array $data): Chat
    {
        return Chat::query()->create($data);
    }

}
