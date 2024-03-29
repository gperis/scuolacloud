<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | such as the size rules. Feel free to tweak each of these messages.
    |
    */
    "accepted"             => ":attribute deve essere accettato.",
    "active_url"           => ":attribute non è un URL valido.",
    "after"                => ":attribute deve essere una data successiva al :date.",
    "alpha"                => ":attribute può contenere solo lettere.",
    "alpha_dash"           => ":attribute può contenere solo lettere, numeri e trattini.",
    "alpha_num"            => ":attribute può contenere solo lettere e numeri.",
    "array"                => ":attribute deve essere un array.",
    "before"               => ":attribute deve essere una data precedente al :date.",
    "between"              => [
        "numeric" => ":attribute deve trovarsi tra :min - :max.",
        "file"    => ":attribute deve trovarsi tra :min - :max kilobytes.",
        "string"  => ":attribute deve trovarsi tra :min - :max caratteri.",
        "array"   => ":attribute deve avere tra :min - :max elementi.",
    ],
    "boolean"              => "Il campo :attribute deve essere vero o falso.",
    "confirmed"            => "Il campo di conferma per :attribute non coincide.",
    "date"                 => ":attribute non è una data valida.",
    "date_format"          => ":attribute non coincide con il formato :format.",
    "different"            => ":attribute e :other devono essere differenti.",
    "digits"               => ":attribute deve essere di :digits cifre.",
    "digits_between"       => ":attribute deve essere tra :min e :max cifre.",
    "email"                => ":attribute non è valido.",
    "exists"               => ":attribute selezionato/a non è valido.",
    "filled"               => ":attribute è richiesto.",
    "image"                => ":attribute deve essere un'immagine.",
    "in"                   => ":attribute selezionato non è valido.",
    "integer"              => ":attribute deve essere un numero intero.",
    "ip"                   => ":attribute deve essere un indirizzo IP valido.",
    "max"                  => [
        "numeric" => ":attribute deve essere minore di :max.",
        "file"    => ":attribute non deve essere più grande di :max kilobytes.",
        "string"  => ":attribute non può contenere più di :max caratteri.",
        "array"   => ":attribute non può avere più di :max elementi.",
    ],
    "mimes"                => ":attribute deve essere del tipo: :values.",
    "min"                  => [
        "numeric" => ":attribute deve valere almeno :min.",
        "file"    => ":attribute deve essere più grande di :min kilobytes.",
        "string"  => ":attribute deve contenere almeno :min caratteri.",
        "array"   => ":attribute deve avere almeno :min elementi.",
    ],
    "not_in"               => "Il valore selezionato per :attribute non è valido.",
    "numeric"              => ":attribute deve essere un numero.",
    "regex"                => "Il formato del campo :attribute non è valido.",
    "required"             => ":attribute è richiesto.",
    "required_if"          => "Il campo :attribute è richiesto quando :other è :value.",
    "required_with"        => "Il campo :attribute è richiesto quando :values è presente.",
    "required_with_all"    => "Il campo :attribute è richiesto quando :values è presente.",
    "required_without"     => "Il campo :attribute è richiesto quando :values non è presente.",
    "required_without_all" => "Il campo :attribute è richiesto quando nessuno di :values è presente.",
    "same"                 => ":attribute e :other devono coincidere.",
    "size"                 => [
        "numeric" => ":attribute deve valere :size.",
        "file"    => ":attribute deve essere grande :size kilobytes.",
        "string"  => ":attribute deve contenere :size caratteri.",
        "array"   => ":attribute deve contenere :size elementi.",
    ],
    "string"               => "The :attribute must be a string.",
    "timezone"             => ":attribute deve essere una zona valida.",
    "unique"               => ":attribute è stato già utilizzato.",
    "url"                  => ":attribute deve essere un URL.",

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom'               => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes'           => [
        'term'                  => 'Anno scolastico',
        'name'                  => 'Nome',
        'ssn'                   => 'Codice fiscale',
        'email'                 => 'E-mail',
        'first_name'            => 'Nome',
        'last_name'             => 'Cognome',
        'birthdate'             => 'Data di nascita',
        'birth_location_id'     => 'Luogo di nascita',
        'res_location_id'       => 'Luogo di residenza',
        'password'              => 'Password',
        'password_confirmation' => 'Ripeti password',
        'old_password'          => 'Vecchia password',
        'primary_group'         => 'Gruppo principale',
        'secondary_group'       => 'Gruppi secondari',
        'start_time_0'          => 'Ora inizio lunedì',
        'start_time_1'          => 'Ora inizio martedì',
        'start_time_2'          => 'Ora inizio mercoledì',
        'start_time_3'          => 'Ora inizio giovedì',
        'start_time_4'          => 'Ora inizio venerdì',
        'start_time_5'          => 'Ora inizio sabato',
        'end_time_0'            => 'Ora fine lunedì',
        'end_time_1'            => 'Ora fine martedì',
        'end_time_2'            => 'Ora fine mercoledì',
        'end_time_3'            => 'Ora fine giovedì',
        'end_time_4'            => 'Ora fine venerdì',
        'end_time_5'            => 'Ora fine sabato',
        'add_teacher'           => 'Secondo insegnante',
        'to'                    => 'Destinatari',
        'subject'               => 'Oggetto',
        'body'                  => 'Corpo dell\'e-mail'
    ],

];
