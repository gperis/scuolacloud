@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3>Gestione lezioni - <span class="semi-bold">{{ $teacher->fullName() }}</span></h3>
        </div>
        <div class="row column-seperation">
            <div class="col-md-12">
                <div class="grid simple">
                    <div class="grid-title no-border"></div>
                    <div class="grid-body no-border">
                        <div class="row-fluid m-t-10">
                            @include('partials.form_errors')
                            {!! Form::open(['action' => ['LessonController@store', $teacher->id]]) !!}
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label class="form-label">Classe</label>
                                    <div class="controls">
                                        {!! Form::select('class_id', $classes->lists('name', 'id') , old('class_id') , ['class' => 'select2-wrapper', 'style' => 'width: 100%']) !!}
                                    </div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label class="form-label">Materia</label>
                                    <div class="controls">
                                        {!! Form::select('subject_id', $subjects->lists('name', 'id') , old('subject_id') , ['class' => 'select2-wrapper', 'style' => 'width: 100%']) !!}
                                    </div>
                                </div>
                            </div>

                            <div class="row m-b-10">
                                <div class="col-md-6"><h3>Giorni</h3></div>
                            </div>

                            <div class="days-selector">
                                @foreach($days as $id => $day)
                                    <div class="row day-container">
                                        <div class="form-group col-md-2" style="line-height: 45px;">
                                            <div class="control">
                                                <div class="checkbox check-default">
                                                    {!! Form::checkbox('dow[]', $id, old('dow'), ['id' => 'dow' . $id]) !!}
                                                    {!! Form::label('dow' . $id, $day) !!}
                                                </div>
                                                <div class="clearfix"></div>
                                            </div>
                                        </div>

                                        <div class="hidden-elements hide">
                                            <div class="form-group col-md-2  hour-box">
                                                <div class="controls">
                                                    <div class="input-group transparent clockpicker">
                                                        <input type="text" name="start_time_{{ $id  }}" class="form-control" value="{{ old('start_time_' . $id) }}" placeholder="Ora inizio">
                                                        <span class="input-group-addon"><i class="fa fa-clock-o"></i></span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="form-group col-md-2  hour-box">
                                                <div class="controls">
                                                    <div class="input-group transparent clockpicker">
                                                        <input type="text" name="end_time_{{ $id  }}" class="form-control" value="{{ old('end_time_' . $id) }}" placeholder="Ora fine">
                                                        <span class="input-group-addon">
                                                            <i class="fa fa-clock-o"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4">
                                                <div class="controls">
                                                    {!! Form::select('ad_teacher_' . $id, ['' => ''] + $adTeachers->lists('name', 'id'),
                                                                    old('ad_teacher_' . $id) ,
                                                                    ['class' => 'select2-wrapper-clear', 'style' => 'width: 100%', 'data-placeholder' => 'Secondo insegnante']) !!}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>


                            <button class="btn btn-primary" type="submit">Aggiungi</button>
                            <a href="{!! action('LessonController@index', [$teacher->id]) !!}" class="btn">Annulla</a>
                            {!! Form::close() !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
