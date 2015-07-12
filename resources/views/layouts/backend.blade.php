@extends('layouts.master')

@section('body')
    <!-- BEGIN BODY -->
    <body class="boxed-layout">
        <div class="container">
            @include('partials.header')
            <!-- BEGIN CONTAINER -->
            <div class="page-container row-fluid">
                @include('partials.sidebar')
                @yield('page-container')
                <!-- BEGIN PAGE CONTAINER-->
                <div class="page-content">
                    <!-- BEGIN SAMPLE PORTLET CONFIGURATION MODAL FORM-->
                    @yield('page-content')
                </div>
            </div>
            <!-- END CONTAINER -->
        </div>
    </body>
@endsection