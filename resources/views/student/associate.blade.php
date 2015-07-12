@extends('layouts.backend')



@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3 class="pull-left">Associa studenti - <span class="semi-bold">{{ $class->name . '  ' . $class->term->term  }}</span></h3>
        </div>
        <div class="row column-seperation">
            <div class="col-md-12">
                <div class="grid simple">
                    <div class="grid-title no-border"></div>
                    <div class="grid-body no-border">
                        @include('partials.form_errors')
                        {!! Form::open(['action' => ['StudentController@storeAssociation', $class->id], 'class' => 'validation']) !!}
                        <div class="row-fluid m-t-10">
                            <table class="table table-bordered dataTable">
                                <thead>
                                    <tr>
                                        <th class="text-center small-cell"></th>
                                        <th class="text-center">Codice fiscale</th>
                                        <th class="text-center">Nome/cognome</th>
                                        <th class="text-center">Anno di nascita</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @if (count($students) > 0)
                                        @foreach ($students as $user)
                                            <tr class="text-center">
                                                <td class="text-left">
                                                    <div class="control">
                                                        <div class="checkbox check-default">
                                                            {!! Form::checkbox('students[]', $user->id, old('students'), ['id' => 'student_' . $user->id]) !!}
                                                            <label for="{!! 'student_' . $user->id !!}">&nbsp;</label>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="clickable v-align-middle">
                                                    {!! $user->ssn !!}
                                                </td>
                                                <td class="clickable tablefull v-align-middle">
                                                    {!! $user->fullName() !!}
                                                </td>
                                                <td class="clickable">
                                                    {!! $user->birthdate !!}
                                                </td>
                                            </tr>
                                        @endforeach
                                    @endif
                                </tbody>
                            </table>

                        </div>

                        <div class="row-fluid m-t-10">
                            <button class="btn btn-primary" type="submit">Aggiungi</button>
                            <a href="{!! action('SchoolClassController@show', [$class->id]) !!}" class="btn">Annulla</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection