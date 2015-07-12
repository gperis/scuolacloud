@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3 class="pull-left">Insegnanti - <span class="semi-bold">Gestione tutoraggi</span></h3>
            <a class="btn btn-primary pull-right" href="{!! action('TutoringController@create') !!}">
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
                                        <th class="text-center medium-cell">Classe</th>
                                        <th class="text-center">Moduli</th>
                                        <th class="text-center">Data</th>
                                        <th class="text-center">Ore</th>
                                        <th class="text-center">Azioni</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if (count($tutoring) > 0)
                                        @foreach ($tutoring as $sTutoring)
                                            <tr class="text-center">
                                                <td class="clickable v-align-middle">
                                                    {!! $sTutoring->schoolClass->name !!}
                                                </td>
                                                <td class="clickable tablefull v-align-middle">
                                                    {!! $sTutoring->modules->map(function($module) {
                                                        return "N.{$module->num}  - {$module->short_description}";
                                                     })->implode('<br>') !!}
                                                </td>
                                                <td class="clickable">
                                                    {!! $sTutoring->date  !!}
                                                </td>
                                                <td class="clickable">
                                                    {{ $sTutoring->start_time->format('H:i') . ' - ' .  $sTutoring->end_time->format('H:i') }}
                                                </td>
                                                <td>
                                                    <a href="{!! action('TutoringController@edit', [$sTutoring->id]) !!}" class="btn btn-primary tip" data-placement="bottom"
                                                       title="Modifica tutoraggio">
                                                        <i class="fa fa-pencil"></i>
                                                    </a>
                                                    <a class="btn btn-danger tip" data-placement="bottom"
                                                       data-toggle="modal" data-target="#deleteTutoring-{!! $sTutoring->id !!}"
                                                       title="Elimina tutoraggio">
                                                        <i class="fa fa-trash"></i>
                                                    </a>

                                                    @section('modals')
                                                        <div class="modal fade"  tabindex="-1" id="deleteTutoring-{!! $sTutoring->id !!}"  role="dialog" aria-labelledby="deleteTutoring-{!! $sTutoring->id !!}" aria-hidden="true">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title" id="deleteTutoring-{!! $sTutoring->id !!}">Sei sicuro?</h4>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        Stai per eliminare  il tutoraggio del {!! $sTutoring->start_date !!} della classe. {!! $sTutoring->schoolClass->name !!}, sei sicuro di volerlo fare?
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        {!! Form::open(['action' => ['TutoringController@destroy', $sTutoring->id], 'method' => 'delete']) !!}
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