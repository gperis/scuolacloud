<?php namespace SC\Http\Controllers;


use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\View;
use SC\Page;

class BackendController extends Controller
{
    protected $auth;
    protected $currentUser;

    public function __construct(Auth $auth)
    {
        $this->auth = $auth;

        if ($auth::guest())
            return redirect('auth.login');

        $this->currentUser = $auth::user();

        View::share('currentUser', $this->currentUser);
        View::share('eUnreadCount', $this->currentUser->emailsTo()->unread()->count());
    }
}