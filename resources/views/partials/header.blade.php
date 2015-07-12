<!-- BEGIN HEADER -->
<div class="header navbar navbar-inverse ">
    <!-- BEGIN TOP NAVIGATION BAR -->
    <div class="container">
        <div class="navbar-inner">
            <div class="header-seperation">
                <ul class="nav pull-left notifcation-center" id="main-menu-toggle-wrapper" style="display:none">
                    <li class="dropdown">
                        <a id="main-menu-toggle" href="#main-menu" class="">
                            <div class="iconset top-menu-toggle-dark"></div>
                        </a>
                    </li>
                </ul>
                <!-- BEGIN LOGO -->
                <a href="{!! action('DashboardController@index') !!}">
                    <img src="{!! asset('img/logo-b.png') !!}" class="logo" alt="" data-src="{!! asset('img/logo-b.png') !!}"
                         data-src-retina="{!! asset('img/logo-b2x.png') !!}" width="135" height="30"/>
                </a>
                <!-- END LOGO -->
                <ul class="nav pull-right notifcation-center">
                    <li class="dropdown" id="header_task_bar">
                        <a href="{!! action('DashboardController@index') !!}" class="dropdown-toggle active" data-toggle="">
                            <div class="iconset top-home"></div>
                        </a>
                    </li>
                    <li class="dropdown" id="header_inbox_bar">
                        <a href="{!! action('EmailController@index') !!}" class="dropdown-toggle">
                            <div class="iconset top-messages"></div>
                            @if ($eUnreadCount > 0)
                                <span class="badge" id="msgs-badge">{!! $eUnreadCount !!}</span>
                            @endif
                        </a>
                    </li>
                </ul>
            </div>
            <!-- END RESPONSIVE MENU TOGGLER -->
            <div class="header-quick-nav">
                <div class="pull-right">
                    <ul class="nav quick-section ">
                        <li class="quicklinks">
                            <a data-toggle="dropdown" class="dropdown-toggle  pull-right " href="#" id="user-options">
                                <div class="iconset top-settings-dark "></div>
                            </a>
                            <ul class="dropdown-menu  pull-right" role="menu" aria-labelledby="user-options">
                                <li><a href="{!! action('SettingsController@index') !!}">Impostazioni</a></li>
                                <li class="divider"></li>
                                <li>
                                    <a href="{!! action('Auth\AuthController@getLogout') !!}">
                                        <i class="fa fa-power-off"></i>&nbsp;
                                        Esci
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- END TOP NAVIGATION MENU -->

        </div>
        <!-- END TOP NAVIGATION BAR -->
    </div>
</div>
<!-- END HEADER -->