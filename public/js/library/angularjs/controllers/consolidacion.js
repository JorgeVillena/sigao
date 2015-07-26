
app.controller("ctrlConsolidacion", function($scope, $http) {
    filtroConsolidacion($scope, $http);
    $scope.showAction = false;
   
    $scope.resolucion = {};
    $scope.messageResol = {};
    oConsolidacion = new Consolidacion();
    oConsolidacion.load();


    $(document).on("click", ".ui-add", function()
    {
        var f = new Date();
        var organizacion = oConsolidacion.getRowData($(this).data("id"));
        $scope.resolucion.organizacion = {}
        $scope.resolucion.organizacion.id = $(this).data("id");
        $scope.resolucion.organizacion.cod = organizacion.org;
        $scope.resolucion.organizacion.nombre = organizacion.nombre;
        $scope.resolucion.tipo = '';
        $scope.resolucion.numero = '';
        $scope.resolucion.procedencia = '';
        $scope.resolucion.afecta = '';
        $scope.resolucion.resuelve = '';
        $scope.resolucion.fecha = f.getDate() + '/' + parseInt(f.getMonth() + 1) + '/' + f.getFullYear(); // new Date().getDay() ;
        $scope.resolucion.observacion = '';
        $scope.resolucion.personero = '';
        $scope.resolucion.telefono = '';
        $scope.resolucion.email = '';
        $scope.resolucion.direccion = '';
        $scope.messageResol.class = '';
        $scope.messageResol.type = ''
        $scope.messageResol.visible = false;
        $scope.messageResol.text = ''
        oConsolidacion.openModal("modalResol");
        $scope.$apply();
    });

    $scope.consultar = function( ) {
        oConsolidacion.ubigeo = $scope.ubigeo;
        oConsolidacion.setModel();
        oConsolidacion.loadGrid();
        $scope.showAction = true;
    };

    $scope.guardarResolucion = function()
    {
        $http({
            url: C_SERVER + '/resolucion/organizacion/guardar',
            method: 'post',
            data: {
                lista: $scope.resolucion.organizacion.id,
                organizacion: $scope.resolucion.organizacion.cod,
                tipo: $scope.resolucion.tipo,
                numero: $scope.resolucion.numero,
                procedencia: $scope.resolucion.procedencia,
                afecta: $scope.resolucion.afecta,
                resuelve: $scope.resolucion.resuelve,
                fecha: $scope.resolucion.fecha,
                observacion: $scope.resolucion.observacion,
                personero: $scope.resolucion.personero,
                telefono: $scope.resolucion.telefono,
                email: $scope.resolucion.email,
                direccion: $scope.resolucion.direccion}
        }).success(function(response, status, headers, config) {
            if (response != null) {
                if (!response.success) {
                    $scope.messageResol.class = 'error';
                    $scope.messageResol.type = 'ERROR'
                    $scope.messageResol.visible = true;
                    $scope.messageResol.text = response.message;
                } else
                {
                    $scope.consultar();
                    oConsolidacion.closeModal("modalResol");
                }
            }
        }).error(function(response, status, headers, config) {
            if (response != null) {
                $scope.messageResol.class = 'error';
                $scope.messageResol.type = 'ERROR'
                $scope.messageResol.visible = true;
                $scope.messageResol.text = response.error.message;
            }
        });

    }

});
