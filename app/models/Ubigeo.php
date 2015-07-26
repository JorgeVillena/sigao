<?php

class Ubigeo extends BaseModel {

    protected $table = 'tab_ubigeo';
    protected $primaryKey = 'c_ubigeo_pk';

    static public function listar() {
        return Ambito::select(array('C_AMBITO_PK as cod', 'C_NOMBRE as nom'))->get();
    }
   
}
