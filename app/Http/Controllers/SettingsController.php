<?php namespace SC\Http\Controllers;

use SC\Http\Requests;
use SC\Http\Requests\UserSettingsRequest;

class SettingsController extends BackendController
{
    public function index()
    {
        return view('settings.index');
    }

    public function update(UserSettingsRequest $request)
    {
        $this->currentUser->update([
                                       'email'    => $request->input('email'),
                                       'password' => $request->input('new_password'),
                                   ]);

        return redirect(action('SettingsController@index'));
    }
}
