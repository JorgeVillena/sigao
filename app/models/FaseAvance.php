<?php

class FaseAvance extends BaseModel {

    protected $table = 'tab_fase_avan';
    protected $primaryKey = 'n_fase_avan_pk';

    static public function listar() {
       
        return Ambito::select(array('C_AMBITO_PK as cod', 'C_NOMBRE as nom'))->get();
    }
   
}
