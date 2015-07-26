@extends('layouts.main.master')

@section('content')
<div class="col-lg-12">
                <div class="wrapper wrapper-content">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title">
                                    <h5><strong>PAÍS: </strong></h5>
                                </div>
                                <div class="ibox-content">
                                    <p>PERÚ</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title">
                                    <h5><strong>VISIÓN: </strong></h5>
                                    <div class="ibox-tools">
                                        <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="true">
                                            <i class="fa fa-wrench"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-user">
                                            <li>
                                                <a href="#">Config option 1</a>
                                            </li>
                                            <li>
                                                <a href="#">Config option 2</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="ibox-content">
                                    <p>MMMMMM NNNNN MMMMMM NNNN MMM NNN MMM NNN MMM NNN MMMMMM NNNNN MMMMMM NNNN MMM NNN MMM NNN MMM</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="ibox float-e-margins">
                                <div class="ibox-title">
                                    <h5><strong>MISIÓN: </strong></h5>
                                    <div class="ibox-tools">
                                        <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="true">
                                            <i class="fa fa-wrench"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-user">
                                            <li>
                                                <a href="#">Config option 1</a>
                                            </li>
                                            <li>
                                                <a href="#">Config option 2</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="ibox-content">
                                    <p>MMMMMM NNNNN MMMMMM NNNN MMM NNN MMM NNN MMM NNN MMMMMM NNNNN MMMMMM NNNN MMM NNN MMM NNN MMM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="ibox float-e-margins border-bottom">
                            <div class="ibox-title">
                                <h5>Línea de Tiempo N°1</h5>
                                <div class="ibox-tools">
                                    <a class="collapse-link">
                                        <i class="fa fa-chevron-down"></i>
                                    </a>
                                    <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="true">
                                        <i class="fa fa-wrench"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-user">
                                        <li>
                                            <a href="#">Modificar</a>
                                        </li>
                                        <li>
                                            <a href="#">Eliminar</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="ibox-content" style="display: block;">
                                   <div class="row">
                                        <div class="ibox float-e-margins border-bottom">
                                            <div class="ibox-title">
                                                <h5>Objetivo N°1</h5>
                                                <div class="ibox-tools">
                                                    <a class="collapse-link">
                                                        <i class="fa fa-chevron-down"></i>
                                                    </a>
                                                    <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="true">
                                                        <i class="fa fa-wrench"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-user">
                                                        <li>
                                                            <a href="#">Modificar</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Eliminar</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="ibox-content ibox-heading" style="display: block;">
                                                    <div class="row">
                                                        <div class="col-lg-4"> 
                                                            <div class="ibox-title">Declaración Administrativa</div>
                                                            <div class="ibox-content">
                                                                <div class="feed-activity-list">
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                            <input id="radio1" type="radio" checked="" value="option1" name="radio1">
                                                                            <label for="radio1">Sin Plan</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                            <input id="radio1" type="radio" checked="" value="option1" name="radio1">
                                                                            <label for="radio1">En fase Inicial</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                            <input id="radio1" type="radio" checked="" value="option1" name="radio1">
                                                                            <label for="radio1">En fase de Desarrollo</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                            <input id="radio1" type="radio" checked="" value="option1" name="radio1">
                                                                            <label for="radio1">Completo con Documentación</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="hr-line-dashed"></div>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                            <button class="btn btn-sm btn-primary pull-right m-t-n-xs" type="submit">
                                                                                <strong>Actualizar</strong>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-8"> 
                                                            <div class="ibox-title">Medio de Verificación (MDV)</div>
                                                            <div class="ibox-content">
                                                                <div class="feed-activity-list">
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                            <div class="input-group">
                                                                                <input class="form-control" type="text">
                                                                                <span class="input-group-btn">
                                                                                    <button class="btn btn-primary" type="button">Upload</button>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="hr-line-dashed"></div>
                                                                    <div class="row">
                                                                        <div class="col-lg-6">
                                                                            <div class="todo-list m-t small-list ui-sortable">
                                                                                <span class="m-l-xs">documento.pdf</span>
                                                                                <small class="label label-primary">
                                                                                    <i class=" fa-bitbucket"></i>
                                                                                </small>
                                                                            </div>
                                                                            <div class="todo-list m-t small-list ui-sortable">
                                                                                <span class="m-l-xs">documento.pdf</span>
                                                                                <small class="label label-primary">
                                                                                    <i class=" fa-bitbucket"></i>
                                                                                </small>
                                                                            </div>
                                                                            <div class="todo-list m-t small-list ui-sortable">
                                                                                <span class="m-l-xs">documento.pdf</span>
                                                                                <small class="label label-primary">
                                                                                    <i class=" fa-bitbucket"></i>
                                                                                </small>
                                                                            </div>
                                                                            <div class="todo-list m-t small-list ui-sortable">
                                                                                <span class="m-l-xs">documento.pdf</span>
                                                                                <small class="label label-primary">
                                                                                    <i class=" fa-bitbucket"></i>
                                                                                </small>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <div class="todo-list m-t small-list ui-sortable">
                                                                                <span class="m-l-xs">documento.pdf</span>
                                                                                <small class="label label-primary">
                                                                                    <i class=" fa-bitbucket"></i>
                                                                                </small>
                                                                            </div>
                                                                            <div class="todo-list m-t small-list ui-sortable">
                                                                                <span class="m-l-xs">documento.pdf</span>
                                                                                <small class="label label-primary">
                                                                                    <i class=" fa-bitbucket"></i>
                                                                                </small>
                                                                            </div>
                                                                            <div class="todo-list m-t small-list ui-sortable">
                                                                                <span class="m-l-xs">documento.pdf</span>
                                                                                <small class="label label-primary">
                                                                                    <i class=" fa-bitbucket"></i>
                                                                                </small>
                                                                            </div>
                                                                            <div class="todo-list m-t small-list ui-sortable">
                                                                                <span class="m-l-xs">documento.pdf</span>
                                                                                <small class="label label-primary">
                                                                                    <i class=" fa-bitbucket"></i>
                                                                                </small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-lg-8"> 
                                                            <div class="ibox-title">Declaración Administrativa</div>
                                                            <div class="ibox-content">
                                                                <div class="feed-activity-list">
                                                                    <div class="row ibox-content">
                                                                        <div class="col-lg-12">
                                                                            <label for="radio1">Envío mi evaluación</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row ibox-content">
                                                                        <div class="col-lg-12">
                                                                            <label for="radio1">Mejora tus documentos</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row ibox-content">
                                                                        <div class="col-lg-12">
                                                                            <label for="radio1">........</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row ibox-content">
                                                                        <div class="col-lg-12">
                                                                            <label for="radio1">.......</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4"> 
                                                            <div class="ibox-title">Evaluación del Equipo CORE</div>
                                                            <div class="ibox-content">
                                                                <div class="feed-activity-list">
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                            <input id="radio1" type="radio" checked="" value="option1" name="radio1">
                                                                            <label for="radio1">Sin MDV disponibles</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                            <input id="radio1" type="radio" checked="" value="option1" name="radio1">
                                                                            <label for="radio1">Insuficiente</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                            <input id="radio1" type="radio" checked="" value="option1" name="radio1">
                                                                            <label for="radio1">Satisfecho</label>
                                                                        </div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col-lg-12">
                                                                            <input id="radio1" type="radio" checked="" value="option1" name="radio1">
                                                                            <label for="radio1">Excelente</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="ibox float-e-margins border-bottom">
                                            <div class="ibox-title">
                                                <h5>Objetivo N°2</h5>
                                                <div class="ibox-tools">
                                                    <a class="collapse-link">
                                                        <i class="fa fa-chevron-down"></i>
                                                    </a>
                                                    <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="true">
                                                        <i class="fa fa-wrench"></i>
                                                    </a>
                                                    <ul class="dropdown-menu dropdown-user">
                                                        <li>
                                                            <a href="#">Modificar</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Eliminar</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="ibox-content ibox-heading" style="display: block;">
                                                    <h3>
                                                    <i class="fa fa-envelope-o"></i>
                                                    New messages
                                                    </h3>
                                                    <small>
                                                        <i class="fa fa-tim"></i>
                                                        You have 22 new messages and 16 waiting in draft folder.
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="ibox float-e-margins border-bottom">
                            <div class="ibox-title">
                                <h5>Línea de Tiempo N°2</h5>
                                <div class="ibox-tools">
                                    <a class="collapse-link">
                                        <i class="fa fa-chevron-down"></i>
                                    </a>
                                    <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="true">
                                        <i class="fa fa-wrench"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-user">
                                        <li>
                                            <a href="#">Config option 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Config option 2</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="ibox-content ibox-heading" style="display: block;">
                                    <h3>
                                    <i class="fa fa-envelope-o"></i>
                                    New messages
                                    </h3>
                                    <small>
                                        <i class="fa fa-tim"></i>
                                        You have 22 new messages and 16 waiting in draft folder.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="ibox float-e-margins border-bottom">
                            <div class="ibox-title">
                                <h5>Línea de Tiempo N°3</h5>
                                <div class="ibox-tools">
                                    <a class="collapse-link">
                                        <i class="fa fa-chevron-down"></i>
                                    </a>
                                    <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="true">
                                        <i class="fa fa-wrench"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-user">
                                        <li>
                                            <a href="#">Config option 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Config option 2</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="ibox-content ibox-heading" style="display: block;">
                                    <h3>
                                    <i class="fa fa-envelope-o"></i>
                                    New messages
                                    </h3>
                                    <small>
                                        <i class="fa fa-tim"></i>
                                        You have 22 new messages and 16 waiting in draft folder.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="ibox float-e-margins border-bottom">
                            <div class="ibox-title">
                                <h5>Línea de Tiempo N°4</h5>
                                <div class="ibox-tools">
                                    <a class="collapse-link">
                                        <i class="fa fa-chevron-down"></i>
                                    </a>
                                    <a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="true">
                                        <i class="fa fa-wrench"></i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-user">
                                        <li>
                                            <a href="#">Config option 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Config option 2</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="ibox-content ibox-heading" style="display: block;">
                                    <h3>
                                    <i class="fa fa-envelope-o"></i>
                                    New messages
                                    </h3>
                                    <small>
                                        <i class="fa fa-tim"></i>
                                        You have 22 new messages and 16 waiting in draft folder.
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
@stop
