@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3 class="pull-left" style="width: 60%">Gestione lezioni - <span class="semi-bold">{{ $teacher->fullName() }}</span></h3>
            <a class="btn btn-primary pull-right" href="{!! action('LessonController@create', [$teacher->id]) !!}">
                Aggiungi
            </a>

            <a href="{!! action('TeacherController@index') !!}" class="btn pull-right m-r-5">
                Torna indietro
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
                                        <th class="medium-cell text-center">Classe</th>
                                        <th class="text-center">Materia</th>
                                        <th class="text-center medium-cell">Giorno</th>
                                        <th class="text-center">Ore</th>
                                        <th class="text-center">Azioni</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if (count($lessons) > 0)
                                        @foreach ($lessons as $lesson)
                                            <tr class="text-center">
                                                <td class="clickable v-align-middle">
                                                    {{ $lesson->schoolClass->name }}
                                                </td>
                                                <td class="clickable tablefull v-align-middle">
                                                    {{ $lesson->subject->name }}
                                                </td>
                                                <td class="clickable">
                                                    {{ $lesson->getDays($lesson->dow) }}
                                                </td>
                                                <td>
                                                    {{ $lesson->hours() }}
                                                </td>
                                                <td>
                                                    <a href="{!! action('LessonController@edit', [$teacher->id, $lesson->id]) !!}" class="btn btn-primary tip" data-placement="bottom"
                                                       title="Modifica lezione">
                                                        <i class="fa fa-pencil"></i>
                                                    </a>
                                                    <a class="btn btn-danger tip"
                                                       data-placement="bottom"
                                                       data-toggle="modal" data-target="#deleteLesson-{!! $lesson->id !!}"
                                                       title="Elimina lezione">
                                                        <i class="fa fa-times"></i>
                                                    </a>
                                                </td>
                                            </tr>

                                        @section('modals')
                                            <div class="modal fade"  tabindex="-1" id="deleteLesson-{!! $lesson->id !!}"  role="dialog" aria-labelledby="deleteLesson-{!! $lesson->id !!}" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h4 class="modal-title" id="deleteLesson-{!! $lesson->id !!}">Sei sicuro?</h4>
                                                        </div>
                                                        <div class="modal-body">
                                                            Stai per eliminare la lezione del {!! $lesson->dow !!}, sei sicuro di volerlo fare?
                                                        </div>
                                                        <div class="modal-footer">
                                                            {!! Form::open(['action' => ['LessonController@destroy', $teacher->id, $lesson->id], 'method' => 'delete']) !!}
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