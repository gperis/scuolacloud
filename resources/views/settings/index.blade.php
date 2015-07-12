@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3>Impostazioni</h3>
        </div>
        <div class="row column-seperation">
            <div class="col-md-12">
                <div class="grid simple">
                    <div class="grid-title no-border"></div>
                    <div class="grid-body no-border">
                        <div class="row-fluid">
                            @include('partials.form_errors')
                            {!! Form::open(['action' => 'SettingsController@update', 'class' => 'validation', 'method' => 'PUT']) !!}

                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label class="form-label">E-mail</label>
                                    {!! Form::email('email', old('email', $currentUser->email), ['class' => 'form-control', 'required']) !!}
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-4">
                                    <label class="form-label">Vecchia password</label>
                                    <span class="help">Min. 6 caratteri</span>
                                    {!! Form::password('old_password', ['class' => 'form-control']) !!}
                                </div>

                                <div class="form-group col-md-4">
                                    <label class="form-label">Nuova password</label>
                                    <span class="help">Min. 6 caratteri</span>
                                    {!! Form::password('password', ['class' => 'form-control']) !!}
                                </div>

                                <div class="form-group col-md-4">
                                    <label class="form-label">Ripeti nuova password</label>
                                    <span class="help">Min. 6 caratteri</span>
                                    {!! Form::password('password_confirmation', ['class' => 'form-control']) !!}
                                </div>
                            </div>

                            <button class="btn btn-primary" type="submit">Modifica</button>
                            <a href="{!! action('DashboardController@index') !!}" class="btn">Annulla</a>
                            {!! Form::close() !!}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection