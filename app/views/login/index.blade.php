@extends('layouts.login.master')
@section('content')
     <div class="fontForm">
            <div class="fontLogoAdra">
                <div class="logoAdra"></div>
            </div>
            <h3>Bienvenidos a ADRA</h3>           
            {{ Form::open(array('url' => 'usuario/login', 'method' => 'post' , 'class' => 'm-t' ,'rol'=>'form')) }}
<!--            <form class="m-t" role="form" action="usuario/login">-->
                <div class="form-group">
                    {{Form::text('username',null,array('class' =>'form-control','placeholder'=>'Usuario','required'=>true,'id'=>'username','name'=>'username'));}}
                    <!--<input type="text" class="form-control" placeholder="Usuario" required="">-->
                </div>
                <div class="form-group">
                    {{Form::password('password',array('class' =>'form-control','placeholder'=>'Clave','required'=>true));}}
                    <!--<input type="password" class="form-control" placeholder="Clave" required="">-->
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b">Iniciar session</button>

<!--                <a href="#"><small>Olvidarte tu clave?</small></a>
                <p class="text-muted text-center"><small>Do not have an account?</small></p>
                <a class="btn btn-sm btn-white btn-block" href="register.html">Crear cuenta</a>-->
            {{ Form::close() }}       
     <!--</form>-->
            <!--<p class="m-t"> <small>Gestión de v-1</small> </p>-->
        </div>
@stop