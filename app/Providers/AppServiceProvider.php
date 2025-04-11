<?php

namespace App\Providers;

use App\Models\Pesan;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        View::composer('*', function ($view) {
            $belumBaca = Pesan::where('status_baca', false)->count();
            $view->with('belumBaca', $belumBaca);
        });
    }
}
