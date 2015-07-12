@extends('layouts.backend')



@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3 class="pull-left">Amministrazione - <span class="semi-bold">Gestione utenti</span></h3>
            <a class="btn btn-primary pull-right" href="{!! action('UserController@create') !!}">
                Aggiungi
            </a>
            <div class="clearfix"></div>
        </div>
        <div class="row column-seperation">
            <div class="col-md-12">
                <div class="grid simple">
                    <div class="grid-title no-border"></div>
                    <div class="grid-body no-border">
                        <div class="row-fluid m-t-10">
                            <table class="table table-bordered dataTable">
                                <thead>
                                    <tr>
                                        <th class="medium-cell text-center">Codice fiscale</th>
                                        <th class="text-center">Nome/cognome</th>
                                        <th class="text-center medium-cell">Anno di nascita</th>
                                        <th class="text-center medium-cell">Gruppi</th>
                                        <th class="text-center">Azioni</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if (count($users) > 0)
                                        @foreach ($users as $user)
                                            <tr class="text-center">
                                                <td class="clickable v-align-middle">
                                                    {!! $user->ssn !!}
                                                </td>
                                                <td class="clickable tablefull v-align-middle">
                                                    {!! $user->fullName() !!}
                                                </td>
                                                <td class="clickable">
                                                    {!! $user->birthdate !!}
                                                </td>
                                                <td class="clickable">
                                                    {!! implode(', ', $user->groups()->orderBy('id')->lists('name')) !!}
                                                </td>
                                                <td>
                                                    <a href="{!! action('UserController@show', [$user->id]) !!}" class="btn btn-primary tip" data-placement="bottom"
                                                       title="Visualizza profilo">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                    <a href="{!! action('UserController@edit', [$user->id]) !!}" class="btn btn-primary tip" data-placement="bottom"
                                                       title="Modifica utente">
                                                        <i class="fa fa-pencil"></i>
                                                    </a>
                                                    <a class="btn btn-danger @if ($currentUser->id == $user->id) disabled @endif tip" data-placement="bottom"
                                                       data-toggle="modal" data-target="#deleteUser-{!! $user->id !!}"
                                                       title="Elimina utente">
                                                        <i class="fa fa-trash"></i>
                                                    </a>

                                                    @if ($currentUser->id != $user->id)
                                                        @section('modals')
                                                            <div class="modal fade"  tabindex="-1" id="deleteUser-{!! $user->id !!}"  role="dialog" aria-labelledby="deleteUser-{!! $user->id !!}" aria-hidden="true">
                                                                <div class="modal-dialog">
                                                                    <div class="modal-content">
                                                                        <div class="modal-header">
                                                                            <h4 class="modal-title" id="deleteUser-{!! $user->id !!}">Sei sicuro?</h4>
                                                                        </div>
                                                                        <div class="modal-body">
                                                                            Stai per eliminare l'utente {!! $user->fullName() !!} e tutti i suoi dati, sei sicuro di volerlo fare?
                                                                        </div>
                                                                        <div class="modal-footer">
                                                                            {!! Form::open(['action' => ['UserController@destroy', $user->id], 'method' => 'delete']) !!}
                                                                            <button type="submit" class="btn btn-danger">
                                                                                Sì, elimina
                                                                            </button>
                                                                            <button type="button" class="btn btn-default" data-dismiss="modal">Annulla</button>
                                                                            {!! Form::close() !!}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            @parent
                                                        @endsection
                                                    @endif
                                                </td>
                                            </tr>
                                        @endforeach
                                    @endif
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection