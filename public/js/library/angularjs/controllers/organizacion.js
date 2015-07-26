app.controller("ctrlOrganizacion", function($scope, $http) {
    filtro($scope, $http);
    $scope.showAction = false;
    $scope.showAdd = false;
    $scope.showDelete = false;
    oOrganizacion = new Organizacion();
    oOrganizacion.load();
    $scope.consultar = function( ) {
        if ($('.op1').val() == 1) {$scope.showAdd = true;}
        if ($('.op2').val() == 1) {$scope.showDelete = true;}
        oOrganizacion.ambito = $scope.ambito;
        oOrganizacion.ubigeo = $scope.ubigeo;
        oOrganizacion.setModel();
        oOrganizacion.loadGrid();
        $scope.showAction = true;
    };
});
