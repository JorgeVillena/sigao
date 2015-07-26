<?php

class Usuario extends Eloquent {

    protected $table = 'tab_usuario';
    protected $primaryKey = 'c_usuario_pk';

    public function validar($input) {
        $data = DB::table('tab_usuario')
                ->select(array("c_usuario_pk as cod"))
                ->where('c_usuario_pk', $input['username'])
                ->where('c_clave', $input['password'])
                ->get();

        return $data;
    }
   
}
