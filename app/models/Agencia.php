<?php

class Agencia extends BaseModel {

    protected $table = 'tab_agencia';
    protected $primaryKey = 'n_agencia_pk';

    static public function listar() {
       
        return Agencia::select(array('C_AMBITO_PK as cod', 'C_NOMBRE as nom'))->get();
    }
}
