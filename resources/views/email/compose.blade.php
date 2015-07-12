@extends('layouts.backend')

@include('email.sidebar')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3>Nuovo messaggio</h3>
        </div>
        <div class="row column-seperation">
            <div class="col-md-12">
                <div class="grid simple">
                    <div class="grid-title no-border"></div>
                    <div class="grid-body no-border">
                        <div class="row-fluid m-t-10">
                            @include('partials.form_errors')

                            {!! Form::open(['action' => 'EmailController@send', 'class' => 'validation']) !!}
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <label class="form-label">Destinatari</label>
                                        <span class="help">Nome della persona</span>
                                        <div class="controls">
                                            {!! Form::select('to[]', $users->lists('name', 'id'), old('to'), ['id' => 'primary_group', 'class' => 'select2-wrapper', 'style' => 'width: 100%', 'multiple']) !!}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <label class="form-label">Oggetto</label>
                                        <div class="controls">
                                            <input name="subject" type="text" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <textarea name="body" placeholder="Messaggio..." class="span12 ckeditor" rows="10"></textarea>
                                    </div>
                                </div>
                            </div>

                            <button class="btn btn-primary" type="submit">Invia</button>
                            <a href="{!! action('EmailController@index') !!}" class="btn">Annulla</a>
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection