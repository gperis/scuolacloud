@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3>Gestione utenti - <span class="semi-bold">Aggiungi</span></h3>
        </div>
        <div class="row column-seperation">
            <div class="col-md-12">
                <div class="grid simple">
                    <div class="grid-title no-border"></div>
                    <div class="grid-body no-border">
                        <div class="row-fluid">
                            @include('partials.form_errors')
                            {!! Form::open(['action' => 'UserController@store', 'class' => 'validation']) !!}
                            <div class="row">
                                <div class="col-md-6"><h3>Dati <span class="semi-bold">anagrafici</span></h3></div>
                            </div>
                                <div class="row">
                                    <div class="form-group col-md-4">
                                        <label class="form-label">Codice fiscale</label>
                                        {!! Form::text('ssn', old('ssn'), ['class' => 'form-control', 'required']) !!}
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label class="form-label">Nome</label>
                                        {!! Form::text('first_name', old('first_name'), ['class' => 'form-control', 'required']) !!}
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label class="form-label">Cognome</label>
                                        {!! Form::text('last_name', old('last_name'), ['class' => 'form-control', 'required']) !!}
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="form-group col-md-4">
                                        <label class="form-label">Data di nascita</label>
                                        {!! Form::text('birthdate', old('birthdate'), ['class' => 'datepicker form-control', 'required']) !!}
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label class="form-label">Luogo di nascita</label>
                                        <div class="control">
                                            <input id="birth_location_id" name="birth_location_id"
                                                   type="hidden"
                                                   class="input-location"
                                                   value="{!! old('birth_location_id') !!}"
                                                   placeholder="{!! old('birth_location_name') !!}"
                                                   required
                                                   style="width: 100%" />

                                            <input type="hidden" name="birth_location_name" value="{!! old('birth_location_name') !!}" />
                                        </div>
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label class="form-label">Luogo di residenza</label>
                                        <div class="control">
                                            <input id="res_location_id" name="res_location_id"
                                                   type="hidden"
                                                   class="input-location"
                                                   value="{!! old('res_location_id') !!}"
                                                   placeholder="{!! old('res_location_name') !!}"
                                                   required
                                                   style="width: 100%" />

                                            <input type="hidden" name="res_location_name" value="{!! old('res_location_name') !!}" />
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="form-group col-md-4">
                                        <label class="form-label">Genero</label>
                                        <div class="control">
                                            {!! Form::select('gender', ['m' => 'Maschio', 'f' => 'Femmina'], old('gender'), ['class' => 'select2-wrapper', 'required']) !!}
                                        </div>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="col-md-6"><h3>Credenziali <span class="semi-bold">utente</span></h3></div>
                                </div>

                                <div class="row">
                                    <div class="form-group col-md-4">
                                        <label class="form-label">E-mail</label>
                                        {!! Form::email('email', old('email'), ['class' => 'form-control', 'required']) !!}
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label class="form-label">Password</label>
                                        <span class="help">Min. 6 caratteri</span>
                                        {!! Form::password('password', ['class' => 'form-control', 'required']) !!}
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label class="form-label">Ripeti password</label>
                                        <span class="help">Min. 6 caratteri</span>
                                        {!! Form::password('password_confirmation', ['class' => 'form-control', 'required']) !!}
                                    </div>
                                </div>



                                <div class="row">
                                    <div class="form-group col-md-4">
                                        <label class="form-label" for="primary_group">Gruppo principale</label>
                                        <div class="control">
                                            {!! Form::select('primary_group', $groups->lists('name', 'id'), old('primary_group'), ['id' => 'primary_group', 'class' => 'select2-wrapper', 'required']) !!}
                                        </div>
                                    </div>

                                    <div class="form-group col-md-8">
                                        <label class="form-label" for="secondary_group">Gruppi secondari</label>
                                        <div class="control">
                                            @foreach($groups as $group)
                                                <div class="checkbox check-default inline">
                                                    {!! Form::checkbox('secondary_group[]', $group->id, old('secondary_group'),
                                                                        ['id' => 'secondary_group_' . $group->id, ($group->id == old('primary_group', $groups->first()->id)) ? 'disabled' : '']) !!}
                                                    {!! Form::label('secondary_group_' . $group->id, $group->name) !!}
                                                </div>
                                            @endforeach
                                        </div>
                                    </div>
                                </div>

                                <button class="btn btn-primary" type="submit">Aggiungi</button>
                                <a href="{!! action('UserController@index') !!}" class="btn">Annulla</a>
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
        $('#primary_group').on('change', groupSelector);
    </script>
@endsection