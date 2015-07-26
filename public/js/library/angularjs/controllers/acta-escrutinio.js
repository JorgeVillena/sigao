app.controller("ctrlActaEscrutinio", function($scope, $http) {
//    $scope.departamentos = {};
    $scope.amb = '0';
    $scope.ubi = '0';
    $scope.actaDep = '';
    $scope.actaProv = '';
    $scope.actaDist = '';
    $scope.show_listaDist = false;
    $scope.showModalCargo = false;
    $scope.showModalActa = false;
    $scope.dataCargo = {};

    $scope.cargarDistActa = function() {
        var ubi = '0';
        var amb = $scope.amb;
        var chk_ced = '2';
        var chk_diseño = '2';
        var chk_imp = '2';
        var chks = chk_ced + '-' + chk_diseño + '-' + chk_imp;

        $http.get(C_SERVER + "/impresion/carga/data-index/" + ubi + '/' + amb + '/' + chks).
                success(function(data, status, headers, config) {
                    $scope.dataDist = data.ubigeo;
                    $scope.departamentos = data.departamento;
                });
    };

    $scope.consultar = function() {
        $scope.show_listaDist = true;

        if ($scope.chk_ced == null || $scope.chk_ced == '') {
            $scope.chk_dis = '';
            $scope.chk_imp = '';
            $scope.show_dis = false;
            $scope.show_imp = false;
            var chk_ced = '2';
        }
        else {
            var chk_ced = $scope.chk_ced;

            if (chk_ced == '1') {
                $scope.show_dis = true;
            } else {
                $scope.chk_dis = '';
                $scope.chk_imp = '';
                $scope.show_dis = false;
                $scope.show_imp = false;
            }
        }

        if ($scope.chk_dis == null || $scope.chk_dis == '') {
            $scope.chk_imp = '';
            $scope.show_imp = false;
            var chk_diseño = '2';
        } else {
            var chk_diseño = $scope.chk_dis;

            if (chk_diseño == '1') {
                $scope.show_imp = true;
            } else {
                $scope.chk_imp = '';
                $scope.show_imp = false;
            }
        }
        if ($scope.chk_imp == null || $scope.chk_imp == '') {
            var chk_imp = '2';
        }
        else {
            var chk_imp = $scope.chk_imp;
        }

        if ($scope.dep == null || $scope.dep == '') {
            $scope.ubi = '0';
            $scope.amb = '0';
        }

        var chks = chk_ced + '-' + chk_diseño + '-' + chk_imp;


        $http.get(C_SERVER + "/impresion/listar/distritos-acta/" + $scope.ubi + '/' + $scope.amb + '/' + chks).
                success(function(data, status, headers, config) {
                    $scope.dataDist = data.ubigeo;
                });
    };

//    $scope.cargarDistActa();

    $scope.getProvincia = function() {
        $scope.show_listaDist = true;

        if ($scope.chk_ced == null || $scope.chk_ced == '') {
            var chk_ced = '2';
        }
        else {
            var chk_ced = $scope.chk_ced;
        }

        if ($scope.chk_dis == null || $scope.chk_dis == '') {
            var chk_diseño = '2';
        }
        else {
            var chk_diseño = $scope.chk_dis;
        }

        if ($scope.chk_imp == null || $scope.chk_imp == '') {
            var chk_imp = '2';
        }
        else {
            var chk_imp = $scope.chk_imp;
        }

        if ($scope.dep == null || $scope.dep == '') {
            $scope.ubi = '0';
            $scope.amb = '0';
            $scope.prov = '';
            $scope.dist = '';
            $scope.provincia = false;
            $scope.distrito = false;
        } else {
            $scope.provincia = true;
            $scope.prov = '';
            $scope.distrito = false;
            $scope.dist = '';
            $scope.ubi = $scope.dep;
            $scope.amb = '1';
        }

        var chks = chk_ced + '-' + chk_diseño + '-' + chk_imp;

        $http.get(C_SERVER + "/impresion/listar/provincias/" + $scope.ubi + '/' + $scope.amb + '/' + chks).
                success(function(data, status, headers, config) {
                    $scope.provincias = data.provincia;
                    $scope.dataDist = data.get.ubigeo;
                });
    };

    $scope.getDistrito = function() {

        if ($scope.chk_ced == null || $scope.chk_ced == '') {
            var chk_ced = '2';
        }
        else {
            var chk_ced = $scope.chk_ced;
        }

        if ($scope.chk_dis == null || $scope.chk_dis == '') {
            var chk_diseño = '2';
        }
        else {
            var chk_diseño = $scope.chk_dis;
        }

        if ($scope.chk_imp == null || $scope.chk_imp == '') {
            var chk_imp = '2';
        }
        else {
            var chk_imp = $scope.chk_imp;
        }

        if ($scope.prov == null || $scope.prov == '') {
            $scope.distrito = false;
            $scope.dist = '';
            $scope.ubi = $scope.dep;
            $scope.amb = '1';
        } else {
            $scope.distrito = true;
            $scope.dist = '';
            $scope.ubi = $scope.prov;
            $scope.amb = '2';
        }

        var chks = chk_ced + '-' + chk_diseño + '-' + chk_imp;

        $http.get(C_SERVER + "/impresion/listar/distritos/" + $scope.ubi + '/' + $scope.amb + '/' + chks).
                success(function(data, status, headers, config) {
                    $scope.distritos = data.distrito;
                    $scope.dataDist = data.get.ubigeo;
                });
    };

    $scope.cargaDistrito = function() {

        if ($scope.chk_ced == null || $scope.chk_ced == '') {
            var chk_ced = '2';
        }
        else {
            var chk_ced = $scope.chk_ced;
        }

        if ($scope.chk_dis == null || $scope.chk_dis == '') {
            var chk_diseño = '2';
        }
        else {
            var chk_diseño = $scope.chk_dis;
        }

        if ($scope.chk_imp == null || $scope.chk_imp == '') {
            var chk_imp = '2';
        }
        else {
            var chk_imp = $scope.chk_imp;
        }

        if ($scope.dist == '' || $scope.dist == null) {
            $scope.ubi = $scope.prov;
            $scope.amb = '2';
        } else {
            $scope.ubi = $scope.dist;
            $scope.amb = '3';
        }

        var chks = chk_ced + '-' + chk_diseño + '-' + chk_imp;

        $http.get(C_SERVER + "/impresion/listar/distritos-acta/" + $scope.ubi + '/' + $scope.amb + '/' + chks).
                success(function(data, status, headers, config) {
                    $scope.dataDist = data.ubigeo;
                });
    };

    $scope.mostarDistrito = function(dep, prov, dist, ubi, chk) {
        $scope.showModalCargo = false;
        $scope.showModalActa = true;
        $scope.actaDep = dep;
        $scope.actaProv = prov;
        $scope.actaDist = dist;
        $scope.actaUbi = ubi;
        $scope.opcion = '2';

        if (chk == '0') {
            $scope.actaChk = '1'
        }
        else {
            $scope.actaChk = '0'
        }
        ;

        $http.get(C_SERVER + "/impresion/listar/orgs-acta/" + ubi).
                success(function(data, status, headers, config) {
                    $scope.listaOrg = data;
                });
    };

    $scope.consultarCargo = function() {
        $scope.msjInfo = false;
        $scope.msjVal = false;

        if ($scope.fechaini == '' || $scope.hr_ini == '' || $scope.min_ini == '' || $scope.tipo_hrini == '' || $scope.fechafin == '' || $scope.hr_fin == '' || $scope.min_fin == '' || $scope.tipo_hrfin == '') {
            $scope.msjVal = true;
        } else {
            $scope.showReporteCargo = true;
            var fechaini = $scope.fechaini + " " + $scope.hr_ini + ":" + $scope.min_ini + " " + $scope.tipo_hrini;
            var fechafin = $scope.fechafin + " " + $scope.hr_fin + ":" + $scope.min_fin + " " + $scope.tipo_hrfin;

            var request = {'fechaini': fechaini, 'fechafin': fechafin};
            var url = C_SERVER + '/impresion/generar/cargo-acta';
            $http.post(url, request)
                    .success(function(data, status) {
                        $scope.dataCargo = data;
                        if(data.length === 0){
                            $scope.msjInfo = true;
                        }else{
                            $scope.showBotonImp = true;
                        }
                        
                    }).error(function(data, status) {
                $scope.msjInfo = true;
            });
        }
    };

    $scope.imprimirCargo = function() {
        var fechaini = $scope.fechaini + "-" + $scope.hr_ini + ":" + $scope.min_ini + "-" + $scope.tipo_hrini;
        fechaini = fechaini.replace("/", ".");
        fechaini = fechaini.replace("/", ".");
        var fechafin = $scope.fechafin + "-" + $scope.hr_fin + ":" + $scope.min_fin + "-" + $scope.tipo_hrfin;
        fechafin = fechafin.replace("/", ".");
        fechafin = fechafin.replace("/", ".");

        location.href = C_SERVER + "/impresion/exportar/pdf-cargo/" + fechaini + "/" + fechafin;
    };

    $scope.generarCargo = function() {
        $scope.showModalCargo = true;
        $scope.showModalActa = false;
        $scope.showReporteCargo = false;
        $scope.showBotonImp = false;
        $scope.msjVal = false;
        $scope.msjInfo = false;
        $scope.fechaini = "";
        $scope.hr_ini = "";
        $scope.min_ini = "";
        $scope.tipo_hrini = "";
        $scope.fechafin = "";
        $scope.hr_fin = "";
        $scope.min_fin = "";
        $scope.tipo_hrfin = "";
    }

    $scope.validarActa = function() {
        $scope.grabarChkDis($scope.actaUbi, $scope.actaChk);
    }

    $scope.grabarChkDis = function(ubi, chk) {

        $http.get(C_SERVER + "/impresion/grabar/chk-dis-acta/" + ubi + '/' + chk).
                success(function(data, status, headers, config) {
                    $scope.consultar();
                });
    }

    $scope.grabarChkImp = function(ubi, chk) {

        $http.get(C_SERVER + "/impresion/grabar/chk-imp-acta/" + ubi + '/' + chk).
                success(function(data, status, headers, config) {
                    $scope.consultar();
                });
    };

    $scope.exportarPdf = function() {
        location.href = C_SERVER + "/impresion/exportar/pdf-acta/" + $scope.actaUbi;
//        $http.get(C_SERVER + "/impresion/exportar/pdf-acta").
//                success(function(data, status, headers, config) {
//                    
//                });
    };

    //calendario
    $scope.verCalendario = function() {
        $("#fechaini").datepicker({
            dateFormat: "dd/mm/yy",
            maxDate: "+0d"
        });
    };


});
