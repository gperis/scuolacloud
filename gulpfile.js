var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.styles([
        '/plugins/boostrapv3/css/bootstrap.min.css',
        '/plugins/boostrapv3/css/bootstrap-theme.min.css',
        '/plugins/pace/pace-theme-flash.css',
        '/css/animate.min.css',
        '/css/custom-icon-set.css',
        '/css/flags.css',
        '/plugins/bootstrap-datepicker/css/datepicker.css',
        '/plugins/boostrap-clockpicker/bootstrap-clockpicker.min.css',
    ], 'public/css/base.css', 'resources/assets');

    mix.styles([
        '/css/themes/corporate/style.css',
        '/css/themes/corporate/responsive.css',
        '/css/custom.css',
    ], 'public/css/template.css', 'resources/assets');


    mix.scripts([
        '/plugins/jquery-1.8.3.min.js',
        '/plugins/jquery-ui/jquery-ui-1.10.1.custom.min.js',
        '/plugins/jquery-jeditable/jquery.jeditable.min.js',
        '/plugins/breakpoints.min.js',
        '/plugins/jquery-unveil/jquery.unveil.min.js',
        '/plugins/jquery-block-ui/jqueryblockui.min.js',
        '/plugins/jquery-scrollbar/jquery.scrollbar.min.js',
        '/plugins/jquery-validation/js/jquery.validate.min.js',
        '/plugins/jquery-validation/js/localization/messages_it.js',
        '/plugins/pace/pace.min.js',
        '/plugins/jquery-numberAnimate/jquery.animateNumbers.min.js',
    ], 'public/js/core.js', 'resources/assets');

    mix.scripts([
        '/plugins/boostrapv3/js/bootstrap.min.js',
        '/plugins/bootstrap-select2/select2.min.js',
        '/plugins/bootstrap-select2/select2_locale_it.min.js',
        '/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
        '/plugins/boostrap-clockpicker/bootstrap-clockpicker.min.js',
    ], 'public/js/bootstrap.js', 'resources/assets');

    mix.scripts([
        '/js/datatables.js',
        '/js/core.js',
        '/js/app.js',
    ], 'public/js/app.js', 'resources/assets');

    mix.version(['public/css/base.css', 'public/css/template.css', 'public/js/core.js', 'public/js/editor.js', 'public/js/bootstrap.js', 'public/js/app.js']);

    mix.copy('resources/assets/fonts', 'public/build/fonts');
    mix.copy('resources/assets/plugins/ckeditor', 'public/plugins/ckeditor');
});
