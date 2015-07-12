@extends('layouts.backend')



@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3 class="pull-left">Amministrazione - <span class="semi-bold">Gestione anni scolastici</span></h3>
            <a class="btn btn-primary pull-right" href="{!! action('ClassTermController@create') !!}">
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
                                        <th class="text-center">A. scolastico</th>
                                        <th class="text-center">Num. classi</th>
                                        <th class="text-center">Azioni</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if (count($terms) > 0)
                                        @foreach ($terms as $term)
                                            <tr class="text-center">
                                                <td class="clickable v-align-middle">
                                                    {!! $term->term !!}
                                                </td>
                                                <td class="clickable tablefull text-right v-align-middle">
                                                    {!! $term->classes()->count() !!}
                                                </td>
                                                <td>
                                                    <a href="{!! action('ClassTermController@edit', [$term->id]) !!}" class="btn btn-primary tip" data-placement="bottom"
                                                       title="Modifica anno scolastico">
                                                        <i class="fa fa-pencil"></i>
                                                    </a>
                                                    <a class="btn btn-danger tip" data-placement="bottom"
                                                       data-toggle="modal" data-target="#deleteTerm-{!! $term->id !!}"
                                                       title="Elimina anno scolastico">
                                                        <i class="fa fa-trash"></i>
                                                    </a>

                                                    @section('modals')
                                                        <div class="modal fade"  tabindex="-1" id="deleteTerm-{!! $term->id !!}"  role="dialog" aria-labelledby="deleteTerm-{!! $term->id !!}" aria-hidden="true">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h4 class="modal-title" id="deleteTerm-{!! $term->id !!}">Sei sicuro?</h4>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        Stai per eliminare l'anno scolastico {!! $term->term !!} e tutte le classi associate, sei sicuro di volerlo fare?
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        {!! Form::open(['action' => ['ClassTermController@destroy', $term->id], 'method' => 'delete']) !!}
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