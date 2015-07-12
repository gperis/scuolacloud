@extends('layouts.frontend')

@section('container')
    <div class="row login-container column-seperation">
        <div class="col-md-5 center-block">
            <div class="grid simple">
                <div class="grid-title no-border">
                    <h4>Login</h4>
                </div>
                <div class="grid-body no-border">
                    @include('partials.form_errors')

                    <form id="login-form" class="login-form validation" action="{!! action('Auth\AuthController@postLogin') !!}" method="post">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">

                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label class="form-label">E-mail</label>
                                    <div class="controls">
                                        <div class="input-with-icon right">
                                            <input type="email" name="email" id="email" class="form-control" value="{!! old('email') !!}" required>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="form-label">Password</label>
                                    <div class="controls">
                                        <div class="input-with-icon right">
                                            <input type="password" name="password" id="password" class="form-control" required>
                                        </div>
                                    </div>
                                </div>

                                <div class="control-group">
                                    <div class="checkbox checkbox check-success">
                                        <input type="checkbox" id="remember" name="remember" value="1">
                                        <label for="remember">Ricordami</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row m-t-10">
                            <div class="col-md-6 forgotten">
                                <a href="{!! action('Auth\PasswordController@getEmail') !!}">Password dimenticata?</a>
                            </div>
                            <div class="col-md-6">
                                <button class="btn btn-primary btn-cons pull-right" type="submit">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
