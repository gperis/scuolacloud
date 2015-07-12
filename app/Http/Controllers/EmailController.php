<?php namespace SC\Http\Controllers;

use SC\Email;
use SC\Http\Requests\EmailRequest;
use SC\User;

class EmailController extends BackendController
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $emails       = $this->currentUser->emailsTo()->orderBy('created_at', 'desc')->get();
        $activeFolder = 'Casella';

        return view('email.index', compact('emails', 'activeFolder'));
    }

    public function folder($slug)
    {
        if ($slug == 'sent') {
            $emails       = $this->currentUser->emailsFrom;
            $activeFolder = 'Inviati';
        } elseif ($slug == 'trash') {
            $emails       = $this->currentUser->emailsTo()->trashed()->get();
            $activeFolder = 'Cestino';
        }

        return view('email.index', compact('emails', 'activeFolder'));
    }

    public function show($id)
    {
        $email = Email::findOrFail($id);
        $email->markAsRead();

        return view('email.show', compact('email'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function compose()
    {
        $users = User::all()->except($this->currentUser->id)->map(function ($user) {
            return ['id' => $user->id, 'name' => $user->fullName()];
        });

        return view('email.compose', compact('users'));
    }

    public function send(EmailRequest $request)
    {
        $toUsers = $request->input('to');
        $subject = $request->input('subject');
        $body    = $request->input('body');

        foreach ($toUsers as $toUser)
            Email::create(['to_id' => $toUser, 'from_id' => $this->currentUser->id, 'subject' => $subject, 'body' => $body]);

        return redirect(action('EmailController@index'));
    }
}
