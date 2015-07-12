@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3 class="pull-left">Amministrazione - <span class="semi-bold">Gestione classi</span></h3>
            <a class="btn btn-primary pull-right" href="{!! action('SchoolClassController@create') !!}">
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
                                        <th class="medium-cell text-center">Classe</th>
                                        <th class="text-center">A. scolastico</th>
                                        <th class="text-center medium-cell">Num. stud.</th>
                                        <th class="text-center">Azioni</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if (count($classes) > 0)
                                        @foreach ($classes as $class)
                                            <tr class="text-center">
                                                <td class="clickable v-align-middle">
                                                    {!! $class->name !!}
                                                </td>
                                                <td class="clickable tablefull v-align-middle">
                                                    {!! $class->term->term !!}
                                                </td>
                                                <td class="clickable text-right">
                                                    {!! $class->students()->count() !!}
                                                </td>
                                                <td>
                                                    <a href="{!! action('SchoolClassController@show', [$class->id]) !!}" class="btn btn-primary tip" data-placement="bottom"
                                                       title="Gestione studenti">
                                                        <i class="fa fa-group"></i>
                                                    </a>
                                                    <a href="{!! action('SchoolClassController@edit', [$class->id]) !!}" class="btn btn-primary tip" data-placement="bottom"
                                                       title="Modifica classe">
                                                        <i class="fa fa-pencil"></i>
                                                    </a>
                                                    <a class="btn btn-danger tip" data-placement="bottom"
                                                       data-toggle="modal" data-target="#deleteClass-{!! $class->id !!}"
                                                       title="Elimina classe">
                                                        <i class="fa fa-trash"></i>
                                                    </a>

                                                    @section('modals')
                                                        <div class="modal fade"  tabindex="-1" id="deleteClass-{!! $class->id !!}"  role="dialog" aria-labelledby="deleteClass-{!! $class->id !!}" aria-hidden="true">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title" id="deleteClass-{!! $class->id !!}">Sei sicuro?</h4>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        Stai per eliminare la classe {!! $class->name !!} - A.S. {!! $class->term->term !!}, sei sicuro di volerlo fare?
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        {!! Form::open(['action' => ['SchoolClassController@destroy', $class->id], 'method' => 'delete']) !!}
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