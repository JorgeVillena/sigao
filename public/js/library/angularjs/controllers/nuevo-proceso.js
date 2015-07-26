app.controller("ctrlNuevoProceso", function($scope, $http) {
    $scope.nomproceso = '';  
    $scope.codproceso = '';
    $scope.chkreg = ''
    $scope.depDestino = {}; 
    
    $scope.cargarDep = function(){
        $http.get(C_SERVER + "/nuevo-proceso/cargar/dep").
                success(function(data, status, headers, config) {
                    $scope.departamentos = data;
                });
    };
    
    $scope.pasarUbigeos = function (){
      $scope.departamentos.splice('010000', 1);
       
       $scope.depDestino.push({
            cod: '999999',
            nom: 'MIDEPA'
       });
    };
    
     $scope.crearNuevoProceso = function() {
                
        $scope.msjInfo = false;
        $scope.msjVal = false;

        if ($scope.nomproceso == '' || $scope.codproceso == '' || $scope.chkreg == '' ) {
            $scope.msjVal = true;
        } else {
            var request = {
                            'nomproceso': $scope.nomproceso, 
                            'codproceso': $scope.codproceso, 
                            'chkreg': '01' 
                          };
                          
            var url = C_SERVER + '/nuevo-proceso/crear/proceso';
            $http.post(url, request)
                    .success(function(data, status) {
//                        $scope.dataCargo = data;
//                        if(data.length === 0){
//                            $scope.msjInfo = true;
//                        }else{
//                            $scope.showBotonImp = true;
//                        }
            }).error(function(data, status) {
                $scope.msjInfo = true;
            });
        }        
    };
    
    $scope.cargarDep();
    //*///*****************
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

    
   
    
  

    //calendario
    $scope.verCalendario = function() {
        $("#fechaini").datepicker({
            dateFormat: "dd/mm/yy",
            maxDate: "+0d"
        });
    };


});
