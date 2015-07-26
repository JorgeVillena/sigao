<?php

class UsuarioController extends BaseController {
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

    public function login() {

//        if (!Session::has('usuario.username')) {
//            return View::make('login.index');
//        } else {
//            return View::make('login/bienvenida');
//        }
        
//        try {
            $u = new Usuario();
            $usuario = new stdClass();
            $datauser = (Object) Input::all();

                    if (!Session::has('usuario.username')) {
                        $validation_input = $u->validar(Input::all());
                        
//                        var_dump($validation_input);exit;
                        
//                        if ($validation_input !== 'ok') {
//                            return Redirect::to("/")->withErrors($validation_input)->withInput();
//                        }else{
//                            
//                        }
//                        
//                        $usuario = true;

                        if ($validation_input) {

                                return Redirect::to('login/bienvenida');//->with('existe', $existe_session);

                        } else {
//                            Session::flash('autentificacion.novalida', $this->constants->C_SESSION_FALLO);
                            return Redirect::to("/");
                        }
                    } else {
                        return Redirect::to('login/bienvenida');
                    }
//      } catch (Exception $exc) {   
//        Session::flush();
////        Session::flash('autentificacion.novalida', $this->constants->C_SESSION_FALLO);
//        return Redirect::to('/');
//    }
        
    }

   

    //    METODO NO ENXONTRADO
    public function missingMethod($parameters = array()) {
        return Redirect::to("/");
    }

}
