@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3 class="pull-left">Gestione utente - <span class="semi-bold">{!! $user->fullName() !!}</span></h3>
            <a class="btn pull-right" href="{!! (URL::previous() != URL::current()) ? URL::previous() : URL::action('DashboardController@index') !!}">
                @if (URL::previous() != URL::current()) Torna indietro @else Vai alla homepage @endif
            </a>
            <div class="clearfix"></div>
        </div>
        <div class="row column-seperation">
            <div class="col-md-12">
                <div class="grid simple">
                    <div class="grid-title no-border"></div>
                    <div class="grid-body no-border">
                        <div class="row">
                            <div class="col-md-6">
                                <h3>Dati utente</h3>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td>Codice fiscale</td>
                                            <td>{{ $user->ssn  }}</td>
                                        </tr>
                                        <tr>
                                            <td>Nome/cognome</td>
                                            <td>{{ $user->fullName() }}</td>
                                        </tr>
                                        <tr>
                                            <td>Data di nascita</td>
                                            <td>{{ $user->birthdate }}</td>
                                        </tr>
                                        <tr>
                                            <td>Genero</td>
                                            <td>{{ $user->gender == 'm' ? 'Maschio' : 'Femmina' }}</td>
                                        </tr>
                                        <tr>
                                            <td>E-mail</td>
                                            <td>{{ $user->email  }}</td>
                                        </tr>
                                        <tr>
                                            <td>Luogo di nascita</td>
                                            <td>
                                                <div class="inline m-r-5 flag flag-{{ strtolower($user->birth_location->country) }}"></div>
                                                {{ $user->birth_location->name }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Luogo di residenza</td>
                                            <td>
                                                <div class="inline m-r-5 flag flag-{{ strtolower($user->res_location->country) }}"></div>
                                                {{ $user->res_location->name }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Gruppi</td>
                                            <td>
                                                <ul class="list-unstyled">
                                                    @foreach ($user->groups as $group)
                                                        <li>{{ $group->name }}</li>
                                                    @endforeach
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-md-6">
                                <h3>Classi frequentate</h3>
                                @if ($user->schoolClasses->count())
                                    <ul class="">
                                        @foreach ($user->schoolClasses as $class)
                                            <li><a href="{!! action('SchoolClassController@show', [$class->id]) !!}">{{ $class->name  }} - {{ $class->term->term }}</a></li>
                                        @endforeach
                                    </ul>
                                @else
                                    <span>Nessuna classe frequentata</span>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection