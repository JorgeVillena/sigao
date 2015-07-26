<?php

class Perfil extends BaseModel {

    protected $table = 'tab_perfil';
    protected $primaryKey = 'n_perfil_pk';

    static public function listar() {
       
        return Ambito::select(array('C_AMBITO_PK as cod', 'C_NOMBRE as nom'))->get();
    }

}
