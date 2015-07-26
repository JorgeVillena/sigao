<?php

class HomeController extends BaseController {
    /*
      |--------------------------------------------------------------------------
      | Default Home Controller
      |--------------------------------------------------------------------------
      |
      | You may wish to use controllers instead of, or in addition to, Closure
      | based routes. That's great! Here is an example controller method to
      | get you started. To route to this controller, just add the route:
      |
      |	Route::get('/', 'HomeController@showWelcome');
      |
     */

    protected $layout = 'layouts.login.master';

    public function index() {

        if (!Session::has('usuario.username')) {
            return View::make('login.index');
        } else {
            return View::make('login/bienvenida');
        }
    }

     public function bienvenida() {
        return View::make('login.bienvenida');
    }

    //    METODO NO ENXONTRADO
    public function missingMethod($parameters = array()) {
        return Redirect::to("/");
    }

}
