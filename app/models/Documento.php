<?php

class Documento extends BaseModel {

    protected $table = 'tab_documento';
    protected $primaryKey = 'n_documento_pk';

    static public function listar() {
       
        return Agencia::select(array('C_AMBITO_PK as cod', 'C_NOMBRE as nom'))->get();
    }
}
