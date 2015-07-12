@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3>Gestione verifiche - <span class="semi-bold">Modifica</span></h3>
        </div>
        <div class="row column-seperation">
            <div class="col-md-12">
                <div class="grid simple">
                    <div class="grid-title no-border"></div>
                    <div class="grid-body no-border">
                        <div class="row-fluid m-t-10">
                            @include('partials.form_errors')
                            {!! Form::open(['action' => ['TestController@update', $test->id], 'method' => 'PUT']) !!}
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label class="form-label">Modulo</label>
                                    <div class="controls">
                                        {!! Form::select('module_id', $modules->lists('name', 'id') , old('module_id', $test->module_id) , ['class' => 'select2-wrapper', 'style' => 'width: 100%']) !!}
                                    </div>
                                </div>

                                <div class="form-group col-md-3">
                                    <label class="form-label">Classe</label>
                                    <div class="controls">
                                        {!! Form::select('class_id', $classes->lists('name', 'id') , old('class_id', $test->class_id) , ['class' => 'select2-wrapper', 'style' => 'width: 100%']) !!}
                                    </div>
                                </div>

                                <div class="form-group col-md-3">
                                    <label class="form-label" for="num">Data</label>
                                    <div class="controls">
                                        <input type="text" class="form-control min-datepicker" name="date" value="{{ old('date', $test->date) }}" />
                                    </div>
                                </div>
                            </div>


                            <button class="btn btn-primary" type="submit">Modifica</button>
                            <a href="{!! action('TestController@index') !!}" class="btn">Annulla</a>
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
            $('.min-datepicker').datepicker({
                format: 'dd/mm/yyyy',
                autoclose: true,
                startDate: new Date({{ date('Y,m - 1,d + 1') }})
            });
        });
    </script>
@endsection