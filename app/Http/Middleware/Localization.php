<?php namespace SC\Http\Middleware;

use Carbon\Carbon;
use Closure;

class Localization
{
    public function handle($request, Closure $next)
    {
        Carbon::setLocale('it');
        Carbon::setToStringFormat('d/m/Y');

        return $next($request);
    }
}