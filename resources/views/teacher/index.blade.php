@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3>Amministrazione - <span class="semi-bold">Gestione insegnanti</span></h3>
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
                                        <th class="text-center">Insegnante</th>
                                        <th class="text-center">Materie</th>
                                        <th class="text-center">Num. ore</th>
                                        <th class="text-center">Azioni</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if (count($teachers) > 0)
                                        @foreach ($teachers as $teacher)
                                            <tr class="text-center">
                                                <td class="clickable v-align-middle">
                                                    {!! $teacher->fullName() !!}
                                                </td>
                                                <td class="clickable tablefull v-align-middle">
                                                    {!! implode(', ', $tSubjects[$teacher->id]); !!}
                                                </td>
                                                <td class="clickable text-right">
                                                    {!! $teacher->lessons->sum(function($lesson) {
                                                        return $lesson->start_time->diffInHours($lesson->end_time, true);
                                                    }) !!}
                                                </td>
                                                <td>
                                                    <a href="{!! action('LessonController@index', [$teacher->id]) !!}" class="btn btn-primary tip" data-placement="bottom"
                                                       title="Gestione lezioni">
                                                        <i class="fa fa-book"></i>
                                                    </a>
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