<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\{Route};


class RouteServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->routes(function () {
            Route::prefix('api')
                ->namespace($this->namespace)
                ->group(
                    function () {
                        require base_path('routes/api.php');
                    }
                );
        });
    }
}
