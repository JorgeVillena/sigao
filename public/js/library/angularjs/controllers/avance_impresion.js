app.controller("ctrlReporte", function($scope, $http) {
    $scope.message={};
    $scope.candidato={};
    $scope.eleccion = "";
    $scope.fini = "";
    $scope.ffin = "";
    $scope.estadoImp = "";
    $scope.tipoImp = "";
    $scope.lista = "";
    $scope.showAvanceImp = false;
    
    $scope.getConsultar = function (){
        var eleccion = $scope.eleccion;
        var feInicio = $scope.fini.replace("/","",'g' );
        var feFin = $scope.ffin.replace("/","",'g');
        var estadoImp = $scope.estadoImp;        
        var tipoImp = $scope.tipoImp;

        $http.get(C_SERVER + '/reporte/avan-impr-ced-cart/listar/' + tipoImp).
        success(function(data, status, headers, config) {
   
//            console.log(data);
            if (data)
            {
                $scope.showAvanceImp = true;
                $scope.lista = data;
                console.log($scope.lista);
            } else
            {
                console.log('chao');             
            }
        });
        
//        if (eleccion != "" && feInicio != "" && feFin != "" && estadoImp != "" && tipoImp != ""){
//
//        } else {
//            if (eleccion == "" && feInicio == "" && feFin == "" && estadoImp == "" && tipoImp == "")
//            {
//                alert('Para consultar el avance de Impresi�n complete todos los datos');
//            }else {
//                if(eleccion != "" && feInicio == "" && feFin == "" && estadoImp == "" && tipoImp == ""){
//                    alert('complete todos los datos');
//                } else if(feInicio != "" && feFin == "" && estadoImp == "" && tipoImp == ""){
//                    alert ('complete todos los datos');
//                }else if(feFin != "" && estadoImp == "" && tipoImp == ""){
//                    alert ('complete todos los datos');
//                }else if(estadoImp != "" && tipoImp == ""){
//                    alert('complete todos los datos');
//                }else if (tipoImp != ""){
//                    alert ('complete todos los datos');
//                }
//            }
//        }
    } 
});