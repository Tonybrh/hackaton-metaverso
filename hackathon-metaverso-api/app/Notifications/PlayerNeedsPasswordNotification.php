<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class PlayerNeedsPasswordNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Crie sua senha para acessar a plataforma')
            ->line('Bem-vindo à plataforma!')
            ->line('Por favor, acesse o link abaixo para gerar sua senha e começar a jogar.')
            ->action('Gerar senha', url('/player/set-password?email=' . $notifiable->email));
    }
}
