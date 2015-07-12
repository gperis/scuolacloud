@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3>Gestione tutoraggi - <span class="semi-bold">Aggiungi</span></h3>
        </div>
        <div class="row column-seperation">
            <div class="col-md-12">
                <div class="grid simple">
                    <div class="grid-title no-border"></div>
                    <div class="grid-body no-border">
                        <div class="row-fluid m-t-10">
                            @include('partials.form_errors')
                            {!! Form::open(['action' => 'TutoringController@store']) !!}
                            <div class="row">
                                <div class="col-md-6">
                                    <h3>Informazioni generali</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label class="form-label">Classe</label>
                                    <div class="controls">
                                        {!! Form::select('class_id', $classes->lists('name', 'id') , old('class_id') , ['class' => 'select2-wrapper', 'style' => 'width: 100%']) !!}
                                    </div>
                                </div>
                                <div class="form-group col-md-3">
                                    <label class="form-label" for="date">Data</label>
                                    <div class="controls">
                                        <input type="text" class="form-control min-datepicker" name="date" value="{{ old('date') }}" />
                                    </div>
                                </div>

                                <div class="form-group col-md-2">
                                    <label class="form-label" for="start_time">Ora inizio</label>
                                    <div class="controls">
                                        <input type="text" class="form-control clockpicker" name="start_time" value="{{ old('start_time') }}" />
                                    </div>
                                </div>
                                <div class="form-group col-md-2">
                                    <label class="form-label" for="end_time">Ora fine</label>
                                    <div class="controls">
                                        <input type="text" class="form-control clockpicker" name="end_time" value="{{ old('end_time') }}" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label class="form-label" for="subject_id">Materia</label>
                                    <div class="controls">
                                        {!! Form::select('subject_id', ['' => ''] + $subjects->lists('name', 'id'), old('subject_id') , ['id' => 'subject_id', 'data-placeholder' => 'Scegli materia...', 'class' => 'select2-wrapper', 'style' => 'width: 100%']) !!}
                                    </div>
                                </div>
                            </div>

                            <div class="row @if ( ! old('subject_id')) hide @endif  modules">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h3>Moduli</h3>
                                    </div>
                                </div>

                                @foreach ($modules as $module)
                                    <div data-subject="{{ $module->subject_id }}" class="form-group @if (old('subject_id') != $module->subject_id) hide @endif col-md-10" style="line-height: 45px;">
                                        <div class="control">
                                            <div class="checkbox check-default">
                                                {!! Form::checkbox('modules[]', $module->id, old('modules'), ['id' => 'module_' . $module->id]) !!}
                                                {!! Form::label('module_' . $module->id, $module->name) !!}
                                            </div>
                                            <div class="clearfix"></div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>


                            <button class="btn btn-primary" type="submit">Aggiungi</button>
                            <a href="{!! action('TutoringController@index') !!}" class="btn">Annulla</a>
                            {!! Form::close() !!}
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
             $('#subject_id').on('change', function() {
                 var subjectId = $(this).val();

                 $('.modules').removeClass('hide');
                 $('.modules .form-group').addClass('hide');
                 $('.modules .form-group[data-subject="' + subjectId + '"]').removeClass('hide');
             });

            $('.min-datepicker').datepicker({
                format: 'dd/mm/yyyy',
                autoclose: true,
                startDate: new Date({{ date('Y,m - 1,d + 1') }})
            });
        });
    </script>
@endsection