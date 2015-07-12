@if (count($errors) > 0)
    <div class="alert alert-danger">
        <strong>Ooops!</strong> C'è stato un problema con i dati inseriti:<br><br>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif