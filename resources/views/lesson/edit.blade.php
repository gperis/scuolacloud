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
                            {!! Form::open(['action' => ['LessonController@update', $teacher->id, $lesson->id], 'method' => 'PUT']) !!}
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label class="form-label">Classe</label>
                                    <div class="controls">
                                        {!! Form::select('class_id', $classes->lists('name', 'id') , old('class_id', $lesson->class_id) , ['class' => 'select2-wrapper', 'style' => 'width: 100%']) !!}
                                    </div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label class="form-label">Materia</label>
                                    <div class="controls">
                                        {!! Form::select('subject_id', $subjects->lists('name', 'id') , old('subject_id', $lesson->subject_id) , ['class' => 'select2-wrapper', 'style' => 'width: 100%']) !!}
                                    </div>
                                </div>
                                <div class="form-group col-md-4">
                                    <label class="form-label" for="ad_teacher">Secondo insegnante</label>
                                    <div class="controls">
                                        {!! Form::select('ad_teacher', ['' => ''] + $adTeachers->lists('name', 'id'),
                                                        old('ad_teacher', isset($adTeacher->id) ? $adTeacher->id : null) ,
                                                        ['class' => 'select2-wrapper-clear', 'style' => 'width: 100%', 'data-placeholder' => 'Nessuno']) !!}
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label class="form-label">Giorno</label>
                                    <div class="controls">
                                        {!! Form::select('dow', $days , old('dow', $lesson->dow) , ['class' => 'select2-wrapper', 'style' => 'width: 100%']) !!}
                                    </div>
                                </div>

                                <div class="form-group col-md-2 hour-box">
                                    <div class="controls">
                                        <label class="form-label" for="start_time">Ora inizio</label>
                                        <div class="input-group transparent clockpicker">
                                            <input type="text" name="start_time" class="form-control" value="{{ old('start_time', $lesson->start_time->format('H:i')) }}">
                                            <span class="input-group-addon"><i class="fa fa-clock-o"></i></span>
                                        </div>
                                    </div>

                                </div>
                                <div class="form-group col-md-2 hour-box">
                                    <div class="controls">
                                        <label class="form-label" for="end_time">Ora fine</label>
                                        <div class="input-group transparent clockpicker">
                                            <input type="text" name="end_time" class="form-control" value="{{ old('end_time', $lesson->end_time->format('H:i')) }}">
                                            <span class="input-group-addon">
                                                <i class="fa fa-clock-o"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <button class="btn btn-primary" type="submit">Modifica</button>
                            <a href="{!! action('LessonController@index', [$teacher->id]) !!}" class="btn">Annulla</a>
                            {!! Form::close() !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
