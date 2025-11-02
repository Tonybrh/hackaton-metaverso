<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class PlayerNeedsPasswordNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public string $token;

    public function __construct(string $token)
    {
        $this->token = $token;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        $url = url('/player/set-password?token=' . $this->token . '&email=' . urlencode($notifiable->email));
        return (new MailMessage)
            ->subject('Crie sua senha para acessar a plataforma')
            ->line('Bem-vindo à plataforma!')
            ->line('Por favor, acesse o link abaixo para gerar ou redefinir sua senha e começar a jogar.')
            ->action('Gerar ou redefinir senha', $url)
            ->line('Se você não solicitou, ignore este e-mail.');
    }
}
