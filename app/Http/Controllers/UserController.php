<?php namespace SC\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use SC\Group;
use SC\Http\Requests;
use SC\Http\Requests\UserRequest;
use SC\User;

class UserController extends BackendController
{
    public function index()
    {
        $users = User::orderBy('id', 'asc')->get();

        return view('user.index', compact('users'));
    }

    public function create()
    {
        $groups = Group::notBanned()->orderBy('id')->get();

        return view('user.create', compact('groups'));
    }

    public function store(UserRequest $request)
    {
        $user   = User::create($request->except('primary_group', 'secondary_group', 'password_confirmation'));
        $groups = array_filter(array_flatten([
                                                 $request->input('primary_group'),
                                                 $request->input('secondary_group'),
                                             ]));

        $user->groups()->sync($groups);

        return Redirect::action('UserController@index');
    }

    public function edit($id)
    {
        $user   = User::findOrFail($id);
        $groups = Group::notBanned()->orderBy('id')->get();
        $pGroup = $user->groups->shift();

        return view('user.edit', compact('user', 'groups', 'pGroup'));
    }

    public function update($id, UserRequest $request)
    {
        $user       = User::findOrFail($id);
        $groups     = array_filter(array_flatten([
                                                     $request->input('primary_group'),
                                                     $request->input('secondary_group'),
                                                 ]));
        $updateData = [
            'email'    => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ];

        $user->update($updateData);
        $user->groups()->sync($groups);

        return Redirect::action('UserController@index');
    }

    public function show($id)
    {
        $user = User::findOrFail($id);

        return view('user.show', compact('user'));
    }

    public function destroy($id)
    {
        if ($this->currentUser->id == $id)
            return redirect(action('UserController@index'));

        User::destroy($id);

        return redirect(action('UserController@index'));
    }

}
