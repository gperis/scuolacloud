@extends('layouts.backend')

@include('email.sidebar')

@section('page-content')
    <div class="content">
        <div class="row"  id="inbox-wrapper">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <div class="page-title hide"><a href="#" id="btn-back"><i class="icon-custom-left"></i></a>
                            <h3>{{ $activeFolder  }}</h3>
                        </div>
                        <div class="grid simple">
                            <div class="grid-title no-border"></div>
                            <div class="grid-body no-border email-body" >
                                <div class="row-fluid m-t-10" >
                                    <table class="table table-fixed-layout dataTable table-no-head table-hover">
                                        <thead>
                                            <tr>
                                                <th class="medium-cell"></th>
                                                <th></th>
                                                <th class="medium-cell"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach ($emails as $email)
                                                <tr class="@if ($email->is_read) active @endif">
                                                    <td class="clickable v-align-middle">
                                                        <a href="{!! action('EmailController@show', [$email->id]) !!}" class="muted">
                                                            @if ($email->from_id != $currentUser->id)
                                                                {!! $email->from->fullName() !!}
                                                            @else
                                                                {!! $email->to->fullName() !!}
                                                            @endif
                                                        </a>
                                                    </td>
                                                    <td class="clickable tablefull v-align-middle">
                                                        <a href="{!! action('EmailController@show', [$email->id]) !!}" class="muted">
                                                            {!! $email->body !!}
                                                        </a>
                                                    </td>
                                                    <td class="clickable">
                                                        <a href="{!! action('EmailController@show', [$email->id]) !!}" class="muted">
                                                            <span class="muted">{!! $email->created_at->diffForHumans() !!} </span>
                                                        </a>
                                                    </td>
                                                </tr>
                                            @endforeach
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection