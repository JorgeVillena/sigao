<?php

class Objetivo extends BaseModel {

    protected $table = 'tab_objetivo';
    protected $primaryKey = 'n_objetivo_pk';

    static public function listar() {
       
        return Ambito::select(array('C_AMBITO_PK as cod', 'C_NOMBRE as nom'))->get();
    }

}
