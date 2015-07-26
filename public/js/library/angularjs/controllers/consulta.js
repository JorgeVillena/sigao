app.controller("ctrlConsulta", function($scope, $http) {
		$scope.message={};
		$scope.candidato={};
		$scope.dni="";
		$scope.nombres="";
		$scope.appaterno!="";
		$scope.apmaterno="";
		$scope.content=false;

		$(document).on("ready",function()
		{
			$("#modalParticipacion").dialog({
				autoOpen:false,
                width:680,
                height:550,
                modal:true
            });
			$("#modalBusquedaDni").dialog({
				autoOpen:false,
                width:680,
                modal:true
            });

		})

		$scope.openBusquedaDni = function()
		{
			$scope.content=false;
			$scope.nombres="";
			$scope.appaterno="";
			$scope.apmaterno="";
			$("#modalBusquedaDni").dialog("open");
		}


		$scope.openParticipacion = function()
		{
			$scope.content=false;
			$scope.dni="";
			$("#modalParticipacion").dialog("open");
		}

		$scope.busquedaDni = function()
		{
				if($scope.nombres!="" && $scope.appaterno!="" && $scope.apmaterno!=""){
	               $http.get(C_SERVER+'/padron/listar/'+$scope.nombres+'/'+$scope.appaterno+'/'+$scope.apmaterno).success(
	                       function(response, status, headers, config) {
	                       	if(response!=null)
	                       	{
	                       		if(response.success==true)
	                       		{
	                       			$scope.content=true;
			                        $scope.message.visible=false;
			                        $scope.candidatos = response.data;
	                       		}else
	                       		{
	                       			$scope.content=false;
	                       			$scope.message.class="notice";
			                    	$scope.message.type="INFO";
			                    	$scope.message.visible=true;
	                       			$scope.message.text=response.message;
	                       		}
	                       	}

	               });
	           }
		}


		$scope.participacion = function()
		{
				if($scope.dni!=""){
	               $http.get(C_SERVER+'/candidato/obtener-dni/'+$scope.dni).success(
	                       function(response, status, headers, config) {
	                       	if(response!=null)
	                       	{
	                       		if(response.success==true)
	                       		{
	                       			$scope.content=true;
			                        $scope.message.visible=false;
			                        $scope.candidato = response.data.candidato;
	                       		}else
	                       		{
	                       			$scope.content=false;
	                       			$scope.message.class="notice";
			                    	$scope.message.type="INFO";
			                    	$scope.message.visible=true;
	                       			$scope.message.text=response.message;
	                       		}
	                       	}

	               });
	           }
		}
});