@extends('layouts.backend')

@include('email.sidebar')

@section('page-content')
    <div class="content">
        <div class="row"  id="inbox-wrapper">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <div class="page-title">
                            <a href="{!! action('EmailController@index') !!}" id="btn-back">
                                <i class="icon-custom-left"></i>
                                <h3>Torna indietro</h3>
                            </a>
                        </div>
                        <div class="grid simple">
                            <div class="grid-title no-border"></div>
                            <div class="grid-body no-border email-body" >
                                <div class="">
                                    <h1 id="emailheading">{{ $email->subject  }}</h1>
                                    <br>
                                    <div class="control">
                                        <div class="pull-left">
                                            <label class="inline">Da</label>
                                            &nbsp;
                                            <div class="btn-group">
                                                <a href="#" data-toggle="dropdown" class="btn btn-mini">
                                                    {{ $email->from->fullName() }}
                                                </a>
                                            </div>
                                        </div>
                                        <div class="pull-right">
                                            <span class="muted small-text">{{ $email->created_at->format('d/m/Y H:i') }}</span>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <br>
                                    <div class="email-body">
                                        <p>{!! $email->body !!}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection