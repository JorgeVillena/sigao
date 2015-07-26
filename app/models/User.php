<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

    use UserTrait,
        RemindableTrait;

    protected $table = 'tab_usuario';
    protected $primaryKey = 'n_usuario_pk';

    public $timestamps = false;

    public function getAuthIdentifier() {
        return $this->getKey();
    }

    public function getAuthPassword() {
        return $this->password;
    }

    public function getRememberToken() {
        return $this->remember_token;
    }

    public function setRememberToken($value) {
        $this->remember_token = $value;
    }

    public function getRememberTokenName() {
        return 'remember_token';
    }

    public function validar($input) {

//        var_dump($input);exit;
        
        $data = DB::table('tab_usuario')
                ->select(array("c_usuario as cod"))
                ->where('c_usuario', $input['username'])
                ->where('c_clave', $input['password'])
                ->get();

        var_dump($data);exit;
//        return $data;
        
//        $result = User::select(array('n_usuario_pk as usuario'))
//                        ->where('c_usuario', $input['username'])
//                        ->where('c_clave', $input['password'])
////                        ->where('c_perfil', $usuario->call->return->usuario->listGrupo->nombre)
//                        ->first();
        
        
        return $result;
    }
    
    public function inicializarSession($usuario, $proceso) {

        Session::flush();
        Session::put('usuario.username', $usuario->call->return->usuario->nombreUsuario);
        Session::put('usuario.nombre', $usuario->call->return->usuario->apellidos . ", " . $usuario->call->return->usuario->nombre);

        if (is_array($usuario->call->return->usuario->listGrupo)) {
            $listgrupo = $usuario->call->return->usuario->listGrupo;

            foreach ($listgrupo as $lg) {

                if (strpos($lg->nombre, "ropc_admin") !== false) {
                    Session::put('usuario.perfil', $lg->nombre);
                    break;
                }

                if (strpos($lg->nombre, "ropc_digit") !== false) {
                    Session::put('usuario.perfil', $lg->nombre);
                    break;
                }
                if (strpos($lg->nombre, "ropc_gge") !== false) {
                    Session::put('usuario.perfil', $lg->nombre);
                    break;
                }
            }
        } else {
            Session::put('usuario.perfil', $usuario->call->return->usuario->listGrupo->nombre);
        }
         

        Session::put('usuario.idSesion', $usuario->call->return->usuario->idSesion);

        Session::put('usuario.contrasena', $usuario->call->return->usuario->contrasena);

        $codigo = User::getPk($usuario->call->return->usuario->nombreUsuario);
        Session::put('usuario.codigo', $codigo->usuario);

        $proceso = Proceso::name($proceso);
        Session::put('proceso_codigo', $proceso->codigo);
        Session::put('proceso_nombre', $proceso->nom);
        Session::put('proceso', $proceso->cod);

    }

  
    public function buscar($usuario) {
        return User::select(array('n_usuario_pk as usuario', 'c_estado as estado'))
                        ->where('c_usuario', $usuario->call->return->usuario->nombreUsuario)
                        ->where('c_perfil', $usuario->call->return->usuario->listGrupo->nombre)
                        ->first();
    }

    public function buscarSalir($username, $perfil) {
        return User::select(array('n_usuario_pk as usuario', 'c_estado as estado'))
                        ->where('c_usuario', $username)
                        // ->where('c_perfil', $perfil)
                        ->first();
    }

    public function buscarUsuario($usuario) {
        return User::select(array('n_usuario_pk as usuario', 'c_estado as estado'))
                        ->where('c_usuario', $usuario)
                        ->first();
    }

}