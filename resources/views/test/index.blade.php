@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3 class="pull-left">Insegnanti - <span class="semi-bold">Gestione verifiche</span></h3>
            <a class="btn btn-primary pull-right" href="{!! action('TestController@create') !!}">
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
                                        <th class="text-center">Materia</th>
                                        <th class="text-center">Modulo</th>
                                        <th class="text-center medium-cell">Data</th>
                                        <th class="text-center">Azioni</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if (count($tests) > 0)
                                        @foreach ($tests as $test)
                                            <tr class="text-center">
                                                <td class="clickable v-align-middle">
                                                    {{ $test->module->subject->name }}
                                                </td>
                                                <td class="clickable tablefull v-align-middle">
                                                    {{ "N. {$test->module->num} - {$test->module->short_description}" }}
                                                </td>
                                                <td class="clickable text-right">
                                                    {{ $test->date }}
                                                </td>
                                                <td>
                                                    <a href="{!! action('TestController@show', [$test->id]) !!}" class="btn btn-primary tip" data-placement="bottom"
                                                       title="Gestione risultati">
                                                        <i class="fa fa-file-text"></i>
                                                    </a>

                                                    <a href="{!! action('TestController@edit', [$test->id]) !!}" class="btn btn-primary tip" data-placement="bottom"
                                                       title="Modifica verifica">
                                                        <i class="fa fa-pencil"></i>
                                                    </a>

                                                    <a class="btn btn-danger tip"
                                                       data-placement="bottom"
                                                       data-toggle="modal" data-target="#deleteTest-{!! $test->id !!}"
                                                       title="Elimina verifica">
                                                        <i class="fa fa-trash"></i>
                                                    </a>
                                                </td>
                                            </tr>

                                        @section('modals')
                                            <div class="modal fade"  tabindex="-1" id="deleteTest-{!! $test->id !!}"  role="dialog" aria-labelledby="deleteTest-{!! $test->id !!}" aria-hidden="true">
                                                <div class="modal-dialog">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h4 class="modal-title" id="deleteTest-{!! $test->id !!}">Sei sicuro?</h4>
                                                        </div>
                                                        <div class="modal-body">
                                                            Stai per eliminare la verifica sul modulo {!! "N. {$test->module->num} - {$test->module->short_description}" !!} del {{ $test->date  }}, sei sicuro di volerlo fare?
                                                        </div>
                                                        <div class="modal-footer">
                                                            {!! Form::open(['action' => ['TestController@destroy', $test->id], 'method' => 'delete']) !!}
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