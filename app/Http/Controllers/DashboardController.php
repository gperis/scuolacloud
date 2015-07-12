<?php namespace SC\Http\Controllers;

class DashboardController extends BackendController
{
    /**
     * Show the application dashboard to the user.
     *
     * @return Response
     */
    public function index()
    {
        return view('dashboard.index');
    }

}
