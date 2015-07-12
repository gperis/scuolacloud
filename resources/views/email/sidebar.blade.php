@section('sidebar_classes')
    mini mini-mobile
@endsection

@section('page-sidebar')
    <div class="inner-menu nav-collapse">
        <div id="inner-menu">
            <div class="inner-wrapper" >
                <a href="{!! action('EmailController@compose') !!}" class="btn btn-block btn-primary" ><span class="bold">COMPONI</span></a>
            </div>
            <div class="inner-menu-content">
                <ul class="big-items">
                    <li class="@if (Request::is('email')) active @endif">
                        @if ($eUnreadCount > 0)
                            <span class="badge badge-important">{!! $eUnreadCount !!}</span>
                        @endif
                        <a href="{!! action('EmailController@index') !!}">Casella</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
@endsection