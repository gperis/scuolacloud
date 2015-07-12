<?php namespace SC\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{

    /**
     * The application's global HTTP middleware stack.
     *
     * @var array
     */
    protected $middleware = [
        'Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode',
        'Illuminate\Cookie\Middleware\EncryptCookies',
        'Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse',
        'Illuminate\Session\Middleware\StartSession',
        'Illuminate\View\Middleware\ShareErrorsFromSession',
        'SC\Http\Middleware\VerifyCsrfToken',
        'SC\Http\Middleware\Localization'
    ];

    /**
     * The application's route middleware.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth'           => 'SC\Http\Middleware\Authenticate',
        'auth.basic'     => 'Illuminate\Auth\Middleware\AuthenticateWithBasicAuth',
        'guest'          => 'SC\Http\Middleware\RedirectIfAuthenticated',
        'administrative' => 'SC\Http\Middleware\Administrative',
        'teacher'        => 'SC\Http\Middleware\Teacher'
    ];

}
