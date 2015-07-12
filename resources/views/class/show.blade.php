@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3 class="pull-left">Gestione studenti - <span class="semi-bold">{{ $class->name . '  ' . $class->term->term  }}</span></h3>
            <a class="btn btn-primary pull-right" href="{!! action('StudentController@associate', $class->id) !!}">
                Associa studenti
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
                                        <th class="text-center">Azioni</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if (count($students) > 0)
                                        @foreach ($students as $user)
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
                                                <td>
                                                    <a href="{!! action('UserController@show', [$user->id]) !!}" class="btn btn-primary tip" data-placement="bottom"
                                                       title="Visualizza profilo">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                    <a class="btn btn-danger tip" data-placement="bottom"
                                                       data-toggle="modal" data-target="#deleteStudent-{!! $user->id !!}"
                                                       title="Disasocia studente">
                                                        <i class="fa fa-trash"></i>
                                                    </a>

                                                    @section('modals')
                                                        <div class="modal fade"  tabindex="-1" id="deleteStudent-{!! $user->id !!}"  role="dialog" aria-labelledby="deleteStudent-{!! $user->id !!}" aria-hidden="true">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title" id="deleteStudent-{!! $user->id !!}">Sei sicuro?</h4>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        Stai per disasociare l'utente {{ $user->fullName() }} dalla classe {{ $class->name }}, sei sicuro di volerlo fare?
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        {!! Form::open(['action' => ['StudentController@disassociate', $class->id, $user->id], 'method' => 'delete']) !!}
                                                                        <button type="submit" class="btn btn-danger">
                                                                            Sì, disassocia
                                                                        </button>
                                                                        <button type="button" class="btn btn-default" data-dismiss="modal">Annulla</button>
                                                                        {!! Form::close() !!}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        @parent
                                                    @endsection
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