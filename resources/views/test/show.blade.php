@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3 class="pull-left">Insegnanti - <span class="semi-bold">Gestione risultati</span></h3>
            <a class="btn pull-right" href="{!! action('TestController@index') !!}">
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
                                        <th class="text-center">Studente</th>
                                        <th class="text-center big-cell">Voto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if (count($students) > 0)
                                        @foreach ($students as $student)
                                            <tr id="{{ $student->id }}" class="text-center">
                                                <td class="clickable v-align-middle">
                                                    {{ $student->fullName() }}
                                                </td>
                                                <td class="voto">@if ($results->has($student->id)){{ $results->get($student->id)->score }}@endif</td>
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

@section('footer')
    <script>
        $(document).ready(function() {
            /* Apply the jEditable handlers to the table */
            $('.dataTable td.voto').editable('{{ action('TestResultController@update', [$test->id])  }}', {
                cssclass: 'invisible-form text-center',
                placeholder: 'Inserisci voto',
                indicator : 'Attendi...',
                "callback": function( sValue, y ) {
                    var aPos = dTable.fnGetPosition( this );
                    dTable.fnUpdate( sValue, aPos[0], aPos[1] );
                },
                "submitdata": function ( value, settings ) {
                    return {
                        "row_id": this.parentNode.getAttribute('id'),
                        "column": dTable.fnGetPosition( this )[2],
                        "_token": '{{ csrf_token() }}'
                    };
                }
            } );
        });
    </script>
@endsection