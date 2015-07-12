@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3 class="pull-left">Insegnanti - <span class="semi-bold">Gestione moduli</span></h3>
            <a class="btn btn-primary pull-right" href="{!! action('ModuleController@create') !!}">
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
                                        <th class="text-center">Modulo</th>
                                        <th class="text-center">Materia</th>
                                        <th class="text-center">Azioni</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if (count($modules) > 0)
                                        @foreach ($modules as $module)
                                            <tr class="text-center">
                                                <td class="clickable v-align-middle">
                                                    N. {{ $module->num }} -
                                                    {{ $module->short_description }}
                                                </td>
                                                <td class="clickable tablefull v-align-middle">
                                                    {{ $module->subject->name }}
                                                </td>
                                                <td>
                                                    <a href="{!! action('ModuleController@edit', [$module->id]) !!}" class="btn btn-primary tip" data-placement="bottom"
                                                       title="Modifica modulo">
                                                        <i class="fa fa-pencil"></i>
                                                    </a>
                                                    <a class="btn btn-danger tip" data-placement="bottom"
                                                       data-toggle="modal" data-target="#deleteModule-{!! $module->id !!}"
                                                       title="Elimina modulo">
                                                        <i class="fa fa-trash"></i>
                                                    </a>

                                                    @section('modals')
                                                        <div class="modal fade"  tabindex="-1" id="deleteModule-{!! $module->id !!}"  role="dialog" aria-labelledby="deleteModule-{!! $module->id !!}" aria-hidden="true">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title" id="deleteModule-{!! $module->id !!}">Sei sicuro?</h4>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        Stai per eliminare il modulo {{ $module->short_description }} di {{ $module->subject->name }} e tutte le lezione e verifiche associate, sei sicuro di volerlo fare?
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        {!! Form::open(['action' => ['ModuleController@destroy', $module->id], 'method' => 'delete']) !!}
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