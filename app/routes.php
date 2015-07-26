<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
/* * ************* HOME *************** */
    Route::get('/', 'HomeController@index');
    
    Route::post('usuario/login', 'UsuarioController@login');
    Route::get('login/bienvenida', 'HomeController@bienvenida');
//    Route::get('usuario', 'HomeController@bienvenida');
//    Route::get('usuario/login', 'HomeController@login');
    
//Route::get('/', function()
//{
//	return View::make('hello');
//});
