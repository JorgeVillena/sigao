app.controller('ctrlImagen', function($scope, $http) {
	$scope.opc=0;
	$scope.ubigeo='';
	$scope.showTree=false;
	$scope.showContent=false;
	oImagen = new Imagen();
	oImagen.load();
	$scope.showTree=true;

	$(document).on('click','.item-img',function()
	{
		oImagen.nom=$(this).data('nom');
		oImagen.opc=$scope.opc;
		oImagen.ubigeo=$scope.ubigeo;
		oImagen.openModal();
	});

	$(document).on('click','.item',function()
	{	
		oImagen.selected=$(this);
		$scope.showContent=false;
		opcion=$(this).data('opc');
		ubigeo=$(this).data('dep');
		$scope.ubigeo = ubigeo;
		$scope.opc=opcion;
		if(opcion===1 || opcion===2 )
		{
			$http.get(C_SERVER+'/organizacion/listar/imagenes'+'/'+ubigeo)
			.success(function(data, status, headers, config)
			{
				$scope.organizaciones=data;
				$scope.showContent=true;
				if(opcion===1)
				{
					$scope.titulo="SÍMBOLOS DE ORGANIZACIONES PARA CÉDULA";
				}else
				{
					$scope.titulo="SÍMBOLOS DE ORGANIZACIONES PARA CARTEL";
				}
				$scope.$apply

			});

		}else if(opcion===3)
		{
			$http.get(C_SERVER+'/candidato/listar-pres'+'/'+ubigeo)
			.success(function(data, status, headers, config)
			{
				$scope.candidatos=data;
				$scope.showContent=true;
				$scope.titulo="FOTOS DE CANDIDATO";
				$scope.$apply
			});
		}

	});




});
