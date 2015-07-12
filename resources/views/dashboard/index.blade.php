@extends('layouts.backend')

@section('page-content')
    <div class="content">
        <div class="page-title">
            <h3>Dashboard</h3>

            <div class="row column-seperation">
                <div class="col-md-12">
                    <div class="grid simple">
                        <div class="grid-title no-border"></div>
                        <div class="grid-body no-border text-center">
                            <div class="row-fluid m-t-10">
                                <h4>Benvenuto alla versione Alpha di ScuolaCloud!</h4>

                                <img src="{!! asset('img/logo-b2x.png') !!}" alt="ScuolaCloud" style="margin: 10px 0 30px 0;"/>

                                <p>
                                    Alcune funzionalità sono ancora in fase di sviluppo/miglioramento e potrebbero non funzionare correttamente.
                                    <br/>
                                    Ci scusiamo per eventuali disservizi causati da questi problemi.
                                    <br/><br/>
                                    Puoi aiutarci segnalando questi errori inviando un'e-mail a <a href="mailto:support@scuolacloud.com" class="bold" target="_blank">support@scuolacloud.com</a>
                                    <br/><br/>
                                    Grazie per la tua collaborazione,<br/>
                                    Amministrazione di ScuolaCloud.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
