<?php

class Comentario extends BaseModel {

    protected $table = 'tab_comentario';
    protected $primaryKey = 'n_comentario_pk';

    static public function listar() {

        return Ambito::select(array('C_AMBITO_PK as cod', 'C_NOMBRE as nom'))->get();
    }

}
