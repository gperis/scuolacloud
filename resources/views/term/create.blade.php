@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title"><h3>Gestione anni scolastici - <span class="semi-bold">Aggiungi</span></h3></div>
        <div class="row column-seperation">
            <div class="col-md-12">
                <div class="grid simple">
                    <div class="grid-title no-border"></div>
                    <div class="grid-body no-border">
                        <div class="row-fluid">
                            @include('partials.form_errors')
                            {!! Form::open(['action' => 'ClassTermController@store']) !!}
                                <div class="row">
                                    <div class="form-group col-xs-4">
                                        <label class="form-label">Anno scolastico</label>
                                        <div class="controls">
                                            <input type="text" name="term" class="form-control"
                                                   placeholder="{!! Carbon\Carbon::now()->year . '/' . Carbon\Carbon::now()->addYear(1)->year !!}">
                                        </div>
                                    </div>
                                </div>

                                <button class="btn btn-primary" type="submit">Aggiungi</button>
                                <a href="{!! action('ClassTermController@index') !!}" class="btn">Annulla</a>
                            {!! Form::close() !!}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection