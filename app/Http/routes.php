<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', 'DashboardController@index');

    Route::group(['prefix' => 'email'], function () {
        Route::get('/', 'EmailController@index');

        // Route::get('folder/{folder}', 'EmailController@folder');

        Route::get('compose', 'EmailController@compose');
        Route::post('compose', 'EmailController@send');

        Route::get('view/{email}', 'EmailController@show')->where('email', '[0-9]+');
    });

    Route::get('settings', 'SettingsController@index');
    Route::put('settings', 'SettingsController@update');

    Route::get('search/location', 'SearchController@location');
    Route::get('search/location/{location}', 'SearchController@location')->where('location', '[0-9]+');

    Route::group(['prefix' => 'teachers', 'middleware' => 'teacher'], function () {
        Route::resource('module', 'ModuleController', ['except' => 'show']);
        Route::resource('tutoring', 'TutoringController', ['except' => 'show']);
        Route::resource('test', 'TestController');
        Route::post('test/{test}/result/', 'TestResultController@update');
    });

    Route::group(['prefix' => 'administration', 'middleware' => 'administrative'], function () {
        Route::resource('user', 'UserController');
        Route::resource('class', 'SchoolClassController');
        Route::resource('term', 'ClassTermController');

        Route::get('teacher', 'TeacherController@index');

        Route::group(['prefix' => 'teacher'], function () {
            Route::get('/{teacher}/lessons', 'LessonController@index')->where('teacher', '[0-9]+');

            Route::get('/{teacher}/lessons/create', 'LessonController@create')->where('teacher', '[0-9]+');
            Route::post('/{teacher}/lessons/store', 'LessonController@store')->where('teacher', '[0-9]+');

            Route::get('/{teacher}/lessons/{lesson}/edit', 'LessonController@edit')->where(['teacher' => '[0-9]+', 'lesson' => '[0-9]+']);
            Route::put('/{teacher}/lessons/{lesson}/edit', 'LessonController@update')->where(['teacher' => '[0-9]+', 'lesson' => '[0-9]+']);

            Route::delete('/{teacher}/lessons/{lesson}', 'LessonController@destroy')->where(['teacher' => '[0-9]+', 'lesson' => '[0-9]+']);
        });

        Route::group(['prefix' => 'class'], function () {
            Route::get('{class}/student/associate', 'StudentController@associate');
            Route::post('{class}/student/associate', 'StudentController@storeAssociation');
            Route::delete('{class}/student/disassociate/{student}', 'StudentController@disassociate');
        });
    });
});

Route::controllers([
    'auth'     => 'Auth\AuthController',
    'password' => 'Auth\PasswordController',
]);
