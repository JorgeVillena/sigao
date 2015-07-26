app.controller('ctrlFormato', function($scope, $http) {
	$scope.showTree=false;
	oFormato = new Formato();
	$scope.showTree=true;
	var tipo;
	var ubigeo='';
	var descripcion;
	var nivel;
	oFormato.load();
	$("#jstree_demo_div").bind(
	    "select_node.jstree", function(evt, data){
	    	if(data.node.id!="j1_1"){	
	    		ubigeo=data.node.data.cod;
	    		descripcion=data.node.data.text;
	    		nivel=data.node.data.nivel;
	    		$.get( C_SERVER+'/formatos/content/'+nivel+'/'+ubigeo+'/'+descripcion, function( data ) {
	    				$("#contenido").html(data);
			    });
			}
			$scope.$apply();
	    }

	);

	
	$(document).on('click','#btnsave',function(){
		$.post( C_SERVER+'/formatos/aprobacion', { tipo: tipo, ubigeo: ubigeo },function(data){
			data=jQuery.parseJSON(data);
			if(data.success){
				$( "#dialog-confirm" ).dialog("close");
				$.get( C_SERVER+'/formatos/content/'+nivel+'/'+ubigeo+'/'+descripcion, function( data ) {
		    		$("#contenido").html(data);
					$.get( C_SERVER+'/formatos/ubigeo/'+ubigeo+'/'+nivel+'/'+tipo, function( data ) {
							response=jQuery.parseJSON(data);
							data=response.data;
							if(tipo==1)
							{
								icon=$('#car_'+data.ubigeo);
								console.log(icon);
								icon.removeClass( "checkrojo checkverde" )
								if(data.cartel){
									icon.addClass('checkverde');
								}else{
									icon.addClass('checkrojo');
								}
								console.log(icon);
							}else{
								if(data.dep!=''){
									icon=$('#ced_'+data.dep);
									icon.removeClass( "checkrojo checkverde" )
									if(data.cedula_dep){
										icon.addClass('checkverde');
									}else{
										icon.addClass('checkrojo');
									}
								}
								if(data.prov!=''){
									icon=$('#ced_'+data.prov);
									if(data.prov!=C_LIMA_PROV && data.prov!=C_CALLAO_PROV){
										icon.removeClass( "checkrojo checkverde" );
										if(data.cedula_prov){
											icon.addClass('checkverde');
										}else{
											icon.addClass('checkrojo');
										}
									}
								}
								if(data.dist!=''){
									icon=$('#ced_'+data.dist);
									icon.removeClass( "checkrojo checkverde" );
									if(data.cedula_dist){
										icon.addClass('checkverde');
									}else{
										icon.addClass('checkrojo');
									}
								}
							}
					});
				});
			}
		} );
	    
	});

	$(document).on('click','#btncancel',function(){
		$( "#dialog-confirm" ).dialog("close");
	});




    $(document).on('click','#chkcartel',function(e){
    	tipo=1;
		$( "#dialog-confirm" ).dialog({
             dialogClass: C_CLASS_CONFIRM,
             resizable: false,
             height:140
        });
 		e.preventDefault();
        return false;
    });

    $(document).on('click','#chkcedula',function(e){
    	tipo=2;
		$( "#dialog-confirm" ).dialog({
             dialogClass: C_CLASS_CONFIRM,
             resizable: false,
             height:140
        });
 		e.preventDefault();
        return false;
    });

    $(document).on('click','#chkcartelConst',function(e){
    	tipo=1;
		$( "#dialog-confirm" ).dialog({
             dialogClass: C_CLASS_CONFIRM,
             resizable: false,
             height:140
        });
 		e.preventDefault();
        return false;
    });

    $(document).on('click','#chkcedulaConst',function(e){
    	tipo=2;
		$( "#dialog-confirm" ).dialog({
             dialogClass: C_CLASS_CONFIRM,
             resizable: false,
             height:140
        });
 		e.preventDefault();
        return false;
    });

});
