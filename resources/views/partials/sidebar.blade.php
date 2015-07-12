<!-- BEGIN SIDEBAR -->
<div class="page-sidebar @yield('sidebar_classes', 'full-length')" id="main-menu">
    <!-- BEGIN MINI-PROFILE -->
    <div class="page-sidebar-wrapper scrollbar-dynamic" id="main-menu-wrapper">
        <div class="user-info-wrapper">
            <div class="user-info">
                <div class="greeting">Benvenuto</div>
                <div class="username">{!! $currentUser->first_name !!} <span class="semi-bold">{!! $currentUser->last_name !!}</span></div>
            </div>
        </div>
        <!-- END MINI-PROFILE -->

        <!-- BEGIN SIDEBAR MENU -->
        <ul>
            <li class="@if (Request::segment(1) == '') start open @endif">
                <a href="{!! action('DashboardController@index') !!}">
                    <i class="icon-custom-home"></i>
                    <span class="title">Dashboard</span><span class="selected"></span>
                </a>
            </li>
            <li class="@if (Request::segment(1) == 'email') open @endif">
                <a href="{!! action('EmailController@index') !!}">
                    <i class="fa fa-envelope"></i>
                    <span class="title">E-mail</span>
                    @if ($eUnreadCount > 0)
                        <span class="label label-important pull-right">{!! $eUnreadCount !!}</span>
                    @endif
                </a>
            </li>
            @if ($currentUser->inGroup(3))
                <li class="@if (Request::segment(1) == 'teachers') start open @endif">
                    <a href="#">
                        <i class="fa fa-user"></i>
                        <span class="title">Insegnanti</span>
                        <span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li class="@if (Request::segment(2) == 'module') active @endif"><a href="{!! action('ModuleController@index') !!}">Gestione moduli</a></li>
                        <li class="@if (Request::segment(2) == 'tutoring') active @endif"><a href="{!! action('TutoringController@index') !!}">Gestione tutoraggi</a></li>
                        <li class="@if (Request::segment(2) == 'test') active @endif"><a href="{!! action('TestController@index') !!}">Gestione verifiche</a></li>
                    </ul>
                </li>
            @endif

            @if ($currentUser->level() >= 3)
                <li class="@if (Request::segment(1) == 'administration') start open @endif">
                    <a href="#">
                        <i class="fa fa-gears"></i>
                        <span class="title">Amministrazione</span><span class="selected"></span>
                        <span class="arrow"></span>
                    </a>
                    <ul class="sub-menu">
                        <li class="@if (Request::segment(2) == 'term') active @endif"><a href="{!! action('ClassTermController@index') !!}"> Gestione anni scolastici</a></li>
                        <li class="@if (Request::segment(2) == 'class') active @endif"><a href="{!! action('SchoolClassController@index') !!}">Gestione classi</a></li>
                        <li class="@if (Request::segment(2) == 'teacher') active @endif"><a href="{!! action('TeacherController@index') !!}">Gestione insegnanti</a></li>
                        <li class="@if (Request::segment(2) == 'user') active @endif"><a href="{!! action('UserController@index') !!}">Gestione utenti</a></li>
                    </ul>
                </li>
            @endif
        </ul>
    </div>
    @yield('page-sidebar')
    <div class="clearfix"></div>
    <!-- END SIDEBAR MENU -->
</div>
<a href="#" class="scrollup">Scroll</a>
<!-- END SIDEBAR -->