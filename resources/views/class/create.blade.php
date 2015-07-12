@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title"><h3>Gestione classi - <span class="semi-bold">Aggiungi</span></h3></div>
        <div class="row column-seperation">
            <div class="col-md-12">
                <div class="grid simple">
                    <div class="grid-title no-border"></div>
                    <div class="grid-body no-border">
                        <div class="row-fluid">
                            @include('partials.form_errors')
                            {!! Form::open(['action' => 'SchoolClassController@store']) !!}
                                <div class="row">
                                    <div class="form-group col-md-4">
                                        <label class="form-label">Nome</label>
                                        <div class="controls">
                                            <input type="text" name="name" class="form-control" value="{{ old('name') }}" placeholder="4A">
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label class="form-label">Anno scolastico</label>
                                        <div class="controls">
                                            {!! Form::select('term_id', $terms , old('term_id') , ['class' => 'select2-wrapper']) !!}
                                        </div>
                                    </div>
                                </div>

                                <button class="btn btn-primary" type="submit">Aggiungi</button>
                                <a href="{!! action('SchoolClassController@index') !!}" class="btn">Annulla</a>
                            {!! Form::close() !!}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection