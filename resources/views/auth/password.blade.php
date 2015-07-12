@extends('layouts.frontend')

@section('container')
    <div class="row login-container column-seperation">
        <div class="col-md-5 center-block">
            <div class="grid simple">
                <div class="grid-title no-border">
                    <h4>Password dimenticata</h4>
                </div>
                <div class="grid-body no-border">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                    @include('partials.form_errors')

                    <form id="login-form" class="login-form validation" action="{!! action('Auth\PasswordController@postEmail') !!}" method="post">
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
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6">
                                <button class="btn btn-primary btn-cons" type="submit">Reimposta password</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
