
app.controller("ctrlCandidato", function($scope, $http) {
    filtroCandidato($scope,$http);
    $scope.showContent=false;
    $scope.showAction=false;
    $scope.showAddCandidato=false;
    $scope.showDelCandidato=false;
    $scope.showGuardarResol=false;
        if ($('.op1').val() == 1) {$scope.showAddLista=true;}else{$scope.showAddLista=false;}
    
    
    
    $scope.message={};
    $scope.messageResol={};
    $scope.messageCand={};
    $scope.candidato={};
    $scope.resolucion={};
    oCandidato = new Candidato();
    oCandidato.load();
            

            $(document).on("click",".ui-add",function()
            {
                var candidato=oCandidato.getRowData($(this).data("id"));
                $scope.resolucion.candidato={}
                $scope.resolucion.candidato.id=$(this).data("id");
                $scope.resolucion.candidato.nombre=candidato.appaterno+' ' + candidato.apmaterno+', '+candidato.nombres;
                $scope.resolucion.tipo='';      
                $scope.resolucion.numero='';  
                $scope.resolucion.procedencia='';
                $scope.resolucion.afecta='';
                $scope.resolucion.resuelve='';
                $scope.resolucion.fecha='';
                $scope.resolucion.observacion='';
                $scope.messageResol.class='';
                $scope.messageResol.type=''
                $scope.messageResol.visible=false;
                $scope.messageResol.text=''
                oCandidato.openModal("modalResol");
                $scope.$apply();

            });
            
            $(document).on("click",".ui-edit",function()
            {
                var candidato=oCandidato.getRowData($(this).data("id"));

                $scope.candidato.cod=candidato.id;
                $scope.candidato.dniOld=candidato.dni;
                $scope.candidato.dni=candidato.dni;
                $scope.candidato.sexo=candidato.sexo;
                $scope.candidato.appaterno=candidato.appaterno;
                $scope.candidato.apmaterno=candidato.apmaterno;
                $scope.candidato.nombres=candidato.nombres;
                $scope.candidato.cargo=candidato.cargo;
                $scope.candidato.orden=candidato.orden;
                $scope.candidato.ubigeo=candidato.ubigeo;
                $scope.candidato.showUbigeo=$scope.provincia=='' && $scope.distrito==''
                $scope.messageCand.class='';
                $scope.messageCand.type=''
                $scope.messageCand.visible=false;
                $scope.messageCand.text=''
                oCandidato.openModal("modalCand");
                $scope.$apply();
            });

            $scope.confirmarLista = function()
            {
                oCandidato.openConfirmLista();
            }
            

            $scope.closeConfirmLista = function()
            {
                oCandidato.closeConfirmLista();
            }

            $scope.confirmarResol = function()
            {
                oCandidato.openConfirmResol();
            }


            $scope.closeConfirmResol = function()
            {
                oCandidato.closeConfirmResol();
            }

            $scope.buscarPersona=function()
            {
               $http({
                url: C_SERVER+'/padron/obtener',
                method: 'post',
                data:{
                dni:$scope.candidato.dni}
                }).success(function (response, status, headers, config) {
                        if(response!=null){
                            if(!response.success){
                                openMessageError(response.message);
                                $scope.candidato.dni='';
                                $scope.candidato.appaterno='';
                                $scope.candidato.apmaterno='';
                                $scope.candidato.nombres='';
                                $scope.candidato.sexo='';

                            }else
                            {
                                $scope.candidato.dni=response.data.dni;
                                $scope.candidato.appaterno=response.data.appaterno;
                                $scope.candidato.apmaterno=response.data.apmaterno;
                                $scope.candidato.nombres=response.data.nombres;
                                $scope.candidato.sexo=response.data.sexo;
                            }
                        }
                    }).error(function (response, status, headers, config) {
                            if(response!=null){
                                openMessageError(response.error.message);
                            }
                 });
            }


            $scope.nuevoCandidato =function()
            {
                $scope.candidato.cod='0';
                $scope.candidato.dni='';
                $scope.candidato.sexo='';
                $scope.candidato.appaterno='';
                $scope.candidato.apmaterno='';
                $scope.candidato.nombres='';
                $scope.candidato.cargo='';
                $scope.candidato.orden='';
                $scope.candidato.ubigeo='';
                $scope.messageCand.class='';
                $scope.messageCand.type=''
                $scope.messageCand.visible=false;
                $scope.messageCand.text=''
                $scope.candidato.showUbigeo=$scope.provincia=='' && $scope.distrito=='';
                oCandidato.openModal("modalCand");
            };

            $scope.guardarCandidato = function()
            {
               $http({
                url: $scope.candidato.cod!='0'?C_SERVER+'/candidato/modificar':C_SERVER+'/candidato/guardar',
                method: 'post',
                data:{
                    id:$scope.candidato.cod,
                    dniOld:$scope.candidato.dniOld,
                    dni:$scope.candidato.dni,
                    lista:$scope.candidato.lista,
                    nombres:$scope.candidato.nombres,
                    appaterno:$scope.candidato.appaterno,
                    apmaterno:$scope.candidato.apmaterno,
                    sexo:$scope.candidato.sexo,
                    ubigeo:$scope.candidato.ubigeo,
                    cargo:$scope.candidato.cargo,
                    orden:$scope.candidato.orden,
                    ubigeoEleccion:$scope.ubigeo
                }
                }).success(function (response, status, headers, config) {
                        if(response!=null){
                            if(!response.success){
                                $scope.messageCand.class='error';
                                $scope.messageCand.type='ERROR'
                                $scope.messageCand.visible=true;
                                $scope.messageCand.text=response.message;
                            }else
                            {
                                $scope.consultar();
                                oCandidato.closeModal("modalCand");
                            }
                        }
                    }).error(function (response, status, headers, config) {
                            if(response!=null){
                                $scope.messageCand.class='error';
                                $scope.messageCand.type='ERROR'
                                $scope.messageCand.visible=true;
                                $scope.messageCand.text=response.error.message;
                            }
                 });
            }

            $scope.guardarResolCandidato = function()
            {
                $http({
                url: C_SERVER+'/resolucion/candidato/guardar',
                method: 'post',
                data:{
                candidato:$scope.resolucion.candidato.id,
                tipo:$scope.resolucion.tipo,
                numero:$scope.resolucion.numero,
                procedencia:$scope.resolucion.procedencia,
                afecta:$scope.resolucion.afecta,
                resuelve:$scope.resolucion.resuelve,
                fecha:$scope.resolucion.fecha,
                observacion:$scope.resolucion.observacion}
                }).success(function (response, status, headers, config) {
                        if(response!=null){
                            if(!response.success){
                                $scope.messageResol.class='error';
                                $scope.messageResol.type='ERROR'
                                $scope.messageResol.visible=true;
                                $scope.messageResol.text=response.message;
                            }else
                            {
                                $scope.consultar();
                                oCandidato.closeModal("modalResol");
                            }
                        }
                    }).error(function (response, status, headers, config) {
                            if(response!=null){
                                $scope.messageResol.class='error';
                                $scope.messageResol.type='ERROR'
                                $scope.messageResol.visible=true;
                                $scope.messageResol.text=response.error.message;
                            }
                 });

            }
            $scope.guardarResolLista=function()
            {
                oCandidato.closeConfirmResol();
                $http({
                url: C_SERVER+'/resolucion/lista/guardar',
                method: 'post',
                data:{id:$scope.lista.id,tipoResolucion:$scope.tipoResolucion,nroResolucion:$scope.nroResolucion}
                }).success(function (response, status, headers, config) {
                        if(response!=null){
                            if(!response.success){
                                openMessageError(response.message);
                            }else
                            {
                                //openMessage(response.message);
                                $scope.consultar();
                            }
                        }
                    }).error(function (response, status, headers, config) {
                            if(response!=null){
                                openMessageError(response.error.message);
                            }
                 });
            }

            $scope.agregarLista = function(){
                $scope.showGuardarResol=false;
                $scope.showDelCandidato=false;
                $scope.showAddCandidato=false;
                if($scope.provincia==='' && $scope.distrito==='')
                {   
                    $http.get(C_SERVER+'/ubigeo-candidato/provincia/listar/'+$scope.ubigeo).success(
                        function(data, status, headers, config) {
                            oCandidato.provincias=jsonToSelect(data);
                            oCandidato.ubigeo=$scope.ubigeo;
                            oCandidato.org=$scope.org;
                            oCandidato.odpe=$scope.odpe;
                            oCandidato.setModel();
                            oCandidato.loadGrid();
                            $scope.message.visible=false;
                            $scope.showAction=true;
                            $scope.showContent=true;});
                    
                }else
                {
                    oCandidato.provincias=null;
                    oCandidato.ubigeo=$scope.ubigeo;
                    oCandidato.org=$scope.org;
                    oCandidato.odpe=$scope.odpe;
                    oCandidato.setModel();
                    oCandidato.loadGrid();
                    $scope.message.visible=false;
                    $scope.showAction=true;
                    $scope.showContent=true;
                }

            }

            $scope.guardarLista = function()
            {
                rowsdata=oCandidato.getRowData();
                $http({
                url: C_SERVER+'/lista/guardar-candidatos',
                method: 'post',
                data:{data:rowsdata,ubigeo:$scope.ubigeo,odpe:$scope.odpe,org:$scope.org,tipoResolucion:$scope.tipoResolucion,nroResolucion:$scope.nroResolucion}
                }).success(function (response, status, headers, config) {
                    if(response!=null){
                            if(!response.success){
                                openMessageError(response.message);
                            }else{
                                $scope.consultar();
                            }
                        }
                    }).error(function (response, status, headers, config) {
                            if(response!=null){
                                openMessageError(response.error.message);
                            }
                 });
            }

            $scope.eliminarLista=function()
            {
               $http({
                url: C_SERVER+'/lista/eliminar',
                method: 'post',
                data:{lista:$scope.lista.id}
                }).success(function (response, status, headers, config) {
                        if(response!=null){
                            if(!response.success){
                                openMessageError(response.message);
                            }else
                            {
                                oCandidato.closeConfirmLista();
                                $scope.consultar();
                            }
                        }
                    }).error(function (response, status, headers, config) {
                            if(response!=null){
                                openMessageError(response.error.message);
                            }
                 });
            }



            $scope.consultar = function( ) {

                $scope.tipoResolucion='';
                $scope.nroResolucion='';
                $scope.message.visible=false;                
                if($scope.tipo==C_TIPO_PROVINCIAL)
                {
                    if($scope.provincia==='')
                    {
                        $scope.message.visible=true;
                        $scope.message.class="error";
                        $scope.message.type="ERROR";
                        $scope.message.text="Debe seleccionar una provincia";
                    }else
                    {
                        $scope.message.visible=false;
                    }
                }else if($scope.tipo==C_TIPO_DISTRITAL)
                {
                    if($scope.provincia==='')
                    {
                        $scope.message.visible=true;
                        $scope.message.class="error";
                        $scope.message.type="ERROR";
                        $scope.message.text="Debe seleccionar una provincia";
                    }else if($scope.distrito==='')
                    {
                        $scope.message.visible=true;
                        $scope.message.class="error";
                        $scope.message.type="ERROR";
                        $scope.message.text="Debe seleccionar un distrito";
                    }else
                    {
                        $scope.message.visible=false;
                    }
                }

                
        
                
                
                if($scope.message.visible==false)
                {   
                    $scope.message.visible=false;
                    $http.get(C_SERVER+'/lista-candidato/obtener/ubi&org&odpe/'+$scope.ubigeo+'/'+$scope.org+'/'+$scope.odpe).
                    success(function(response, status, headers, config) {
                        if(response.success==false)
                        {
                            if(response.code==='-1')
                            {
                                $scope.showContent=false;
                                $scope.showGuardarResol=false;
                                $scope.message.visible=true;
                                $scope.message.class="error";
                                $scope.message.type="ERROR";
                                $scope.message.text=response.message;
                            }
                            else
                            {
                                $scope.showContent=false;
                                $scope.showGuardarResol=false;
                                $scope.message.visible=true;
                                $scope.message.class="warning";
                                $scope.message.type="ADVERTENCIA";
                                $scope.message.text=response.message;
                            }
                        }else
                        {   
                            if ($('.op1').val() == 1) {$scope.showGuardarResol=true;}
                            if ($('.op2').val() == 1) {$scope.showDelCandidato=true;}
                            $scope.message.visible=false;
                            $scope.showContent=true;
                            $scope.showAction=false;
                            $scope.lista=response.data.lista;
                            oCandidato.lista=response.data.lista.id;

                            if(response.data.resolucion!=null){
                            $scope.tipoResolucion=response.data.resolucion.tipo;
                            $scope.nroResolucion=response.data.resolucion.numero}
                            $scope.candidato.escanios=response.data.escanios;
                            $scope.candidato.cargos=response.data.cargos;
                            $scope.candidato.provincias=response.data.provincias;
                            $scope.candidato.cargo='';
                            $scope.candidato.orden='';
                            $scope.candidato.ubigeo='';
                            $scope.candidato.lista=response.data.lista.id;
                            if ($('.op1').val() == 1) {$scope.showAddCandidato=response.data.incompleto;}
                            oCandidato.regional=$scope.provincia=='' && $scope.distrito=='';
                            oCandidato.setModelView();
                            oCandidato.loadGrid();
                        }
                    });
                }


            };
        });