app.controller("ctrlImportacion", function($scope, $http) {
	$scope.message={};
    $scope.disabledProcesar=false;
    $scope.message.class='';
    $scope.message.type=''
    $scope.message.visible=false;
    $scope.message.text='';


	$scope.procesar=function()
	{


                $scope.message.class='warning';
                $scope.message.type='ADVERTENCIA'
                $scope.message.visible=true;
                $scope.message.text='CARGANDO...';

                $scope.disabledProcesar=true;
				$http({
                url: C_SERVER+'/utilitarios/guardar-eleccion',
                method: 'post',
                data:{proceso:$scope.proc}
                }).success(function (response, status, headers, config) {
                        if(response!=null){
                            if(!response.success){
                                $scope.message.class='error';
                                $scope.message.type='ERROR'
                                $scope.message.visible=true;
                                $scope.message.text=response.message;
                            }else
                            {
								$scope.message.class="notice";
			                    $scope.message.type="INFO";
			                    $scope.message.visible=true;
			                    $scope.message.text=response.message;
                            }
                        }
                        $scope.disabledProcesar=false;
                    }).error(function (response, status, headers, config) {

                            if(response!=null){
                                $scope.message.class='error';
                                $scope.message.type='ERROR'
                                $scope.message.visible=true;
                                $scope.message.text=response.error.message;
                            }
                            $scope.disabledProcesar=false;
                 });
	}
});