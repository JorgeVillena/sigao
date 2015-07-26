<?php

class FaseEvaluacion extends BaseModel {

    protected $table = 'tab_fase_eval';
    protected $primaryKey = 'n_fase_eval_pk';

    static public function listar() {
       
        return Ambito::select(array('C_AMBITO_PK as cod', 'C_NOMBRE as nom'))->get();
    }
    
}
