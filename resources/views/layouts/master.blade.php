<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
    <meta charset="utf-8"/>
    <title>@yield('title', 'ScuolaCloud - ALPHA')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta content="" name="description"/>
    <meta content="" name="author"/>
    <!-- BEGIN CSS TEMPLATE -->
    <link href="{!! asset('/plugins/font-awesome/css/font-awesome.min.css') !!}" rel="stylesheet" type="text/css"/>
    <link href="{!! asset('/plugins/bootstrap-select2/select2.min.css') !!}" rel="stylesheet" type="text/css"/>
    <link href="{!! asset('/plugins/datatables-responsive/css/datatables.responsive.css') !!}" rel="stylesheet" type="text/css"/>
    <link href="{!! elixir('css/base.css') !!}" rel="stylesheet" type="text/css"/>
    <link href="{!! elixir('css/template.css') !!}" rel="stylesheet" type="text/css"/>
    <!-- END CSS TEMPLATE -->
    @yield('head')
</head>
<!-- END HEAD -->

@yield('body')
@yield('modals')

<!-- BEGIN CORE JS FRAMEWORK-->
<script type="text/javascript" src="{!! elixir('js/core.js') !!}"></script>
<script type="text/javascript" src="{!! elixir('js/bootstrap.js') !!}"></script>
<script type="text/javascript" src="{!! asset('/plugins/jquery-datatable/js/jquery.dataTables.min.js') !!}"></script>
<script type="text/javascript" src="{!! asset('/plugins/jquery-datatable/extra/js/dataTables.tableTools.min.js') !!}"></script>
<script type="text/javascript" src="{!! asset('/plugins/datatables-responsive/js/datatables.responsive.min.js') !!}"></script>
<script type="text/javascript" src="{!! asset('/plugins/datatables-responsive/js/lodash.min.js') !!}"></script>
<script type="text/javascript" src="{!! asset('/plugins/ckeditor/ckeditor.js') !!}"></script>
<script type="text/javascript" src="{!! elixir('js/app.js') !!}"></script>
@yield('footer')
</html>