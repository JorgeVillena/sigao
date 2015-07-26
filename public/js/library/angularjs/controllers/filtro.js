
function  ubigeo($scope)
{
    if ($scope.ambito === C_NACIONAL) {
        $scope.ubigeo = "";
    } else if ($scope.ambito === C_DEPARTAMENTAL) {
        $scope.ubigeo = $scope.departamento;
    } else if ($scope.ambito === C_PROVINCIAL) {
        $scope.ubigeo = $scope.provincia;
    } else if ($scope.ambito === C_DISTRITAL) {
        $scope.ubigeo = $scope.distrito;
    }
}

function  ejecutar()
{
    setTimeout(function() {
        angular.element('#btnconsultar').trigger('click');
    }, 100);
}


function  filtro($scope, $http) {

    $scope.showContent = false;
    $scope.showdep = false;
    $scope.showodpe = false;
    $scope.showprovincia = false;
    $scope.showdistrito = false;
    $scope.showconsultar = false;
    $scope.ambito = '';
    $scope.getAmbito = function() {
        $scope.showContent = false;
        $scope.showdep = false;
        $scope.showodpe = false;
        $scope.showprovincia = false;
        $scope.showdistrito = false;
        $scope.showconsultar = false;
        $scope.departamento = '';
        $scope.odpe = '';
        $scope.provincia = '';
        $scope.distrito = '';
        if ($scope.ambito == C_NACIONAL) {
            $scope.showconsultar = true;
            ejecutar();
        }
        else {
            if ($scope.ambito === '') {
                $scope.showdep = false;
            }
            else {
                $scope.showdep = true;
            }

            $http.get(C_SERVER + "/ubigeo/departamento/listar").
                    success(function(data, status, headers, config) {
                        $scope.departamentos = data;
                        $scope.dep = '';
                    });
        }

        $scope.showContent = $scope.showconsultar;
        ubigeo($scope);
    };

    $scope.getDepartamento = function() {
        $scope.showodpe = false; //!($scope.departamento === '');
        $scope.showprovincia = false;
//        $scope.showdistrito = false;
        $scope.showconsultar = false;
        $scope.provincia = '';
        $scope.distrito = '';
        if ($scope.ambito === C_DEPARTAMENTAL) {
            $scope.showprovincia = false;
            $scope.showconsultar = true;
            ubigeo($scope);
            ejecutar();
        }
        else {
            $scope.showprovincia = true;
            $http.get(C_SERVER + "/ubigeo/provincia/listar/" + $scope.departamento + ($scope.odpe != '' ? "/" : "") + $scope.odpe).
                    success(function(data, status, headers, config) {
//                console.log(data);
                        $scope.provincias = data;
                        $scope.provincia = '';
                        ubigeo($scope);
                    });
        }

        $scope.showContent = $scope.showconsultar;
//        $scope.odpe = '';
        /*$http.get(C_SERVER+"/ubiamb/odpe/listar/"  + $scope.ambito  + ($scope.departamento!=''?"/":"") + $scope.departamento).
         success(function(data, status, headers, config) {
         $scope.odpes = data;
         $scope.odpe = '';
         ubigeo($scope);
         });*/

    };
    $scope.getOdpe = function() {
        $scope.showdistrito = false;
        $scope.showconsultar = false;
        $scope.provincia = '';
        $scope.distrito = '';
        if ($scope.ambito === C_DEPARTAMENTAL) {
            $scope.showprovincia = false;
            $scope.showconsultar = true;
            ejecutar();
        }
        else {
            $scope.showprovincia = !($scope.odpe === '');
            $http.get(C_SERVER + "/ubigeo/provincia/listar/" + $scope.departamento + ($scope.odpe != '' ? "/" : "") + $scope.odpe).
                    success(function(data, status, headers, config) {
//                console.log(data);
                        $scope.provincias = data;
                        $scope.provincia = '';
                        ubigeo($scope);
                    });
        }

        $scope.showContent = $scope.showconsultar;
    };

    $scope.getProvincia = function() {

        if ($scope.ambito === C_PROVINCIAL) {

            if ($scope.provincia === '')
            {
                $scope.showconsultar = false;
            } else
            {
                $scope.showconsultar = true;
                ubigeo($scope);
                ejecutar();
            }
        }

        if ($scope.ambito === C_DISTRITAL) {
            $scope.showdistrito = true;
            $scope.showconsultar = false;
            $http.get(C_SERVER + "/ubigeo/distrito/listar/" + ''/*$scope.odpe + ($scope.provincia != '' ? "/" : "")*/ + $scope.provincia).
                    success(function(data, status, headers, config) {
                        $scope.distritos = data;
                        $scope.distrito = '';
                        ubigeo($scope);
                    });
        }
        $scope.showContent = $scope.showconsultar;
    };
//    $scope.getProvinciaCand = function( ) {
//
//        if ($scope.ambito === C_PROVINCIAL) {
//
//            if ($scope.provincia === '')
//            {
//                $scope.showconsultar = false;
//            } else
//            {
//                $scope.showconsultar = true;
//                ubigeo($scope);
//                ejecutar();
//            }
//        }
//
//        if ($scope.ambito === C_DISTRITAL) {
//            $scope.showdistrito = true;
//            $scope.showconsultar = false;
//            $http.get(C_SERVER + "/ubigeo/distrito/listar-cand/" + $scope.odpe + ($scope.provincia != '' ? "/" : "") + $scope.provincia).
//                    success(function(data, status, headers, config) {
//                        $scope.distritos = data;
//                        $scope.distrito = '';
//                        ubigeo($scope);
//                    });
//        }
//        $scope.showContent = $scope.showconsultar;
//
//    };

    $scope.getDistrito = function() {
        if ($scope.ambito === C_DISTRITAL) {
            if ($scope.distrito === '')
            {
                $scope.showconsultar = false;
            } else
            {
                $scope.showconsultar = true;
                ejecutar();
            }
            ubigeo($scope);
        }
        $scope.showContent = $scope.showconsultar;
    };
}


function  ubigeoCandidato($scope)
{
    if ($scope.tipo == C_TIPO_NACIONAL || $scope.tipo == C_TIPO_REGIONAL) {
        if ($scope.provincia == '' && $scope.distrito == '')
        {
            $scope.ubigeo = $scope.departamento;
        } else if ($scope.provincia != '' && $scope.distrito == '')
        {
            $scope.ubigeo = $scope.provincia;
        } else if ($scope.provincia != '' && $scope.distrito != '')
        {
            $scope.ubigeo = $scope.distrito;
        }

    } else if ($scope.tipo === C_TIPO_PROVINCIAL) {
        if ($scope.provincia != '' && $scope.distrito == '')
        {
            $scope.ubigeo = $scope.provincia;
        } else if ($scope.provincia != '' && $scope.distrito != '')
        {
            $scope.ubigeo = $scope.distrito;
        }
    } else if ($scope.tipo === C_TIPO_DISTRITAL) {
        $scope.ubigeo = $scope.distrito;
    }
}
function  ubigeoOrg($scope)
{
    if ($scope.tipo == C_TIPO_NACIONAL) {
        $scope.ubiOrg = '000000';
    } else if ($scope.tipo == C_TIPO_REGIONAL) {
        $scope.ubiOrg = $scope.departamento;
    } else if ($scope.tipo === C_TIPO_PROVINCIAL) {
        $scope.ubiOrg = $scope.provincia;
    } else if ($scope.tipo === C_TIPO_DISTRITAL) {
        $scope.ubiOrg = $scope.distrito;
    }
}

function  filtroCandidato($scope, $http) {

    $scope.showContent = false;
    $scope.showtipo = false;
    $scope.showodpe = false;
    $scope.showorg = false;
    $scope.showprovincia = false;
    $scope.showdistrito = false;
    $scope.showconsultar = false;
    $scope.departamento = '';

    $scope.getDepartamento = function() {
        $scope.showeleccion = false;
        if ($scope.departamento != '') {
            $http.get(C_SERVER + "/ubi/eleccion/listar/" + $scope.departamento).
                    success(function(data, status, headers, config) {
                        $scope.elecciones = data;

                        $scope.showeleccion = true;
                        $scope.showtipo = false;
                        $scope.showorg = false;
                        $scope.showprovincia = false;
                        $scope.showdistrito = false;
                        $scope.showconsultar = false;
                        $scope.showContent = false;
                        $scope.message.visible = false;

                        $scope.eleccion = '';
                        $scope.tipo = '';
                        $scope.org = '';
                        $scope.provincia = '';
                        $scope.distrito = '';
//                        ubigeo($scope);
                        ubigeoCandidato($scope);
                    });
        } else {
            $scope.departamento = '';
            $scope.showeleccion = false;
            $scope.showprovincia = false;
            $scope.showdistrito = false;
            $scope.showtipo = false;
            $scope.showorg = false;
            $scope.showconsultar = false;
            $scope.showContent = false;
            $scope.message.visible = false;
        }
    };

    $scope.getEleccion = function() {
        if ($scope.eleccion != '') {
            //01 = ELECCION REGIONAL
            if ($scope.eleccion === '01') {
                $scope.showtipo = true;
                $scope.showprovincia = false;
                $scope.showdistrito = false;
                $scope.showorg = false;
                $scope.showconsultar = false;
                $scope.showContent = false;
                $scope.message.visible = false;

                $scope.tipo = '';
                $scope.org = '';
                $scope.provincia = '';
                $scope.distrito = '';
                $scope.listarTipoOrg();

                //OTRAS ELECCIONES    
            } else {
                $scope.showprovincia = true;
                $scope.showdistrito = false;
                $scope.showtipo = false;
                $scope.showorg = false;
                $scope.showconsultar = false;
                $scope.showContent = false;
                $scope.message.visible = false;

                $scope.tipo = '';
                $scope.org = '';
                $scope.provincia = '';
                $scope.distrito = '';
                $scope.listarProvinciaCand();
            }
        } else {
            $scope.eleccion = '';
            $scope.showprovincia = false;
            $scope.showdistrito = false;
            $scope.showtipo = false;
            $scope.showorg = false;
            $scope.showconsultar = false;
            $scope.showContent = false;
            $scope.message.visible = false;
        }
    };


    $scope.getOdpe = function() {
        $scope.showContent = false;
        $scope.showorg = false;
        $scope.showprovincia = false;
        $scope.showdistrito = false;
        $scope.showconsultar = false;
        $scope.message.visible = false;
        $scope.showtipo = !($scope.odpe === '');
        $scope.tipo = '';
        $scope.org = '';
        $scope.provincia = '';
        $scope.distrito = '';
        ubigeoCandidato($scope);
    };

    $scope.listarTipoOrg = function() {
        $http.get(C_SERVER + "/ubi/tipo-org/listar/" + $scope.eleccion).
                success(function(data, status, headers, config) {
                    $scope.tipos = data;
                    ubigeoCandidato($scope);
                });
    }

    $scope.listarProvinciaCand = function() {
        $http.get(C_SERVER + "/ubigeo-candidato/provincia/listar/" + $scope.departamento).
                success(function(data, status, headers, config) {
                    $scope.provincias = data;
                    ubigeoCandidato($scope);
                });
    }

    $scope.listarDistritoCand = function() {
        $http.get(C_SERVER + "/ubigeo-candidato/distrito/listar/" + $scope.provincia).
                success(function(data, status, headers, config) {
                    $scope.distritos = data;
                    $scope.distrito = '';
                    $scope.message.visible = false;
                    $scope.showconsultar = false;
                    $scope.showContent = false;
//                    $scope.distrito = '';
                    $scope.showdistrito = true;
                    ubigeoCandidato($scope);
                });
    }


    $scope.getProvincia = function() {
        if ($scope.provincia != '') {
            $scope.tipo = '';
            $scope.distrito = '';
            $scope.showtipo = false;
            $scope.showorg = false;
            $scope.showconsultar = false;
            $scope.showContent = false;
            $scope.message.visible = false;
            
            if ($scope.eleccion === '02') {
                $scope.showtipo = true;
                $scope.showdistrito = false;
                $scope.listarTipoOrg();
            } else {
                $scope.showtipo = false;
                $scope.listarDistritoCand();
            }
        } else {
            $scope.provincia = '';
            $scope.distrito = '';
            $scope.showdistrito = false;
            $scope.showtipo = false;
            $scope.showorg = false;
            $scope.showconsultar = false;
            $scope.showContent = false;
            $scope.message.visible = false;
        }

    };

    $scope.getDistrito = function() {
        if ($scope.distrito != '') {
            $scope.showtipo = true;
            $scope.showorg = false;
            $scope.showconsultar = false;
            $scope.showContent = false;
            $scope.message.visible = false;
            $scope.tipo = '';
            $scope.org = '';
            $scope.listarTipoOrg();
        } else {
            $scope.distrito = '';
            $scope.tipo = '';
            $scope.org = '';
            $scope.showtipo = false;
            $scope.showorg = false;
            $scope.showconsultar = false;
            $scope.showContent = false;
            $scope.message.visible = false;
        }

    };

    $scope.getTipo = function() {
        if ($scope.tipo != '') {
            $scope.showorg = false;
            ubigeoOrg($scope);
            $http.get(C_SERVER + "/organizacion/listar/organizacion/" + $scope.ubiOrg + "/" + $scope.tipo).
                    success(function(data, status, headers, config) {
                        $scope.organizaciones = data;
                        $scope.showorg = true;
                        $scope.showconsultar = false;
                        $scope.showContent = false;
                        $scope.message.visible = false;
                        $scope.org = '';
                    });
        } else {
            $scope.tipo = '';
            $scope.org = '';
            $scope.showorg = false;
            $scope.showconsultar = false;
            $scope.showContent = false;
            $scope.message.visible = false;
        }
    };

    $scope.getOrganizacion = function() {
        if ($scope.org != '') {
            $scope.message.visible = false;
            $scope.showconsultar = true;
            $scope.showContent = false;
            ubigeoCandidato($scope);
            $http.get(C_SERVER + "/odpe/listar/" + $scope.ubigeo).
                    success(function(data, status, headers, config) {
                        $scope.odpe = data.odpe;
                        console.log($scope.odpe);
                    });
        } else {
            $scope.org = '';
            $scope.showconsultar = false;
            $scope.showContent = false;
            $scope.message.visible = false;
        }
    };
}

function  filtroConsolidacion($scope, $http) {

    $scope.showContent = false;
    $scope.showtipo = false;
    $scope.showodpe = false;
    $scope.showorg = false;
    $scope.showprovincia = false;
    $scope.showdistrito = false;
    $scope.showconsultar = false;
    $scope.departamento = '';

    $scope.getDepartamento = function() {
        $scope.showeleccion = false;
        if ($scope.departamento != '') {
            $http.get(C_SERVER + "/ubi/eleccion/listar/" + $scope.departamento).
                    success(function(data, status, headers, config) {
                        $scope.elecciones = data;

                        $scope.showeleccion = true;
                        $scope.showprovincia = false;
                        $scope.showdistrito = false;
                        $scope.showconsultar = false;
                        $scope.showContent = false;

                        $scope.eleccion = '';
                        $scope.provincia = '';
                        $scope.distrito = '';
                        ubigeoOrg($scope);
                    });
        } else {
            $scope.departamento = '';
            $scope.showeleccion = false;
            $scope.showprovincia = false;
            $scope.showdistrito = false;
            $scope.showconsultar = false;
            $scope.showContent = false;
        }
    };

    $scope.getEleccion = function() {
        if ($scope.eleccion != '') {
            //01 = ELECCION REGIONAL
            if ($scope.eleccion === '01') {
                $scope.showconsultar = true;
                $scope.showprovincia = false;
                $scope.showdistrito = false;
                $scope.showContent = true;

                $scope.ubigeo = $scope.departamento;
                ejecutar();
                $scope.provincia = '';
                $scope.distrito = '';

                //OTRAS ELECCIONES    
            } else {
                $scope.showprovincia = true;
                $scope.showdistrito = false;
                $scope.showconsultar = false;
                $scope.showContent = false;

                $scope.provincia = '';
                $scope.distrito = '';

                $http.get(C_SERVER + "/ubigeo-candidato/provincia/listar/" + $scope.departamento).
                        success(function(data, status, headers, config) {
                            $scope.provincias = data;
                        });
            }
        } else {
            $scope.eleccion = '';
            $scope.showprovincia = false;
            $scope.showdistrito = false;
            $scope.showconsultar = false;
            $scope.showContent = false;
        }
    };

    $scope.getProvincia = function() {
        if ($scope.provincia != '') {
            if ($scope.eleccion === '02') {
                $scope.showconsultar = true;
                $scope.showContent = true;
                $scope.showdistrito = false;

                $scope.distrito = '';
                $scope.ubigeo = $scope.provincia;
                ejecutar();
            } else {
                $scope.showdistrito = true;
                $scope.showconsultar = false;
                $scope.showContent = false;

                $scope.distrito = '';
                $http.get(C_SERVER + "/ubigeo-candidato/distrito/listar/" + $scope.provincia).
                        success(function(data, status, headers, config) {
                            $scope.distritos = data;
                        });
            }
        } else {
            $scope.provincia = '';
            $scope.showdistrito = false;
            $scope.showconsultar = false;
            $scope.showContent = false;
        }
    };

    $scope.getDistrito = function() {
        if ($scope.distrito != '') {
            $scope.showconsultar = true;
            $scope.showContent = true;
            $scope.ubigeo = $scope.distrito;
            ejecutar();
        } else {
            $scope.distrito = '';
            $scope.showconsultar = false;
            $scope.showContent = false;
        }
    };




}
