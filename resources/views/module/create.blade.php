@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3>Gestione moduli - <span class="semi-bold">Aggiungi</span></h3>
        </div>
        <div class="row column-seperation">
            <div class="col-md-12">
                <div class="grid simple">
                    <div class="grid-title no-border"></div>
                    <div class="grid-body no-border">
                        <div class="row-fluid m-t-10">
                            @include('partials.form_errors')
                            {!! Form::open(['action' => 'ModuleController@store']) !!}
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label class="form-label">Materia</label>
                                    <div class="controls">
                                        {!! Form::select('subject_id', $subjects->lists('name', 'id') , old('subject_id') , ['class' => 'select2-wrapper', 'style' => 'width: 100%']) !!}
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-md-2">
                                    <label class="form-label" for="num">Num. modulo</label>
                                    <div class="controls">
                                        <input type="text" class="form-control" name="num" />
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="form-group col-md-5">
                                    <label class="form-label" for="short_description">Descrizione breve</label>
                                    <div class="controls">
                                        <input type="text" class="form-control" name="short_description" max="255" />
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="form-group col-md-5">
                                    <label class="form-label" for="long_description">Descrizione analitica</label>
                                    <div class="controls">
                                        <textarea name="long_description" class="form-control" rows="5">{{ old('long_description') }}</textarea>
                                    </div>
                                </div>
                            </div>



                            <button class="btn btn-primary" type="submit">Aggiungi</button>
                            <a href="{!! action('ModuleController@index') !!}" class="btn">Annulla</a>
                            {!! Form::close() !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
