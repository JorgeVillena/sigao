app.controller("ctrlAgrupacion", function($scope, $http) {
            $scope.dep = false;
            $scope.pro = false;
            $scope.dis = false;

            $http.get("../agrupacion/data").
                    success(function(data, status, headers, config) {
                        $('#s2id_odpe a span:nth-child(1)').html('Select Odpe').css({'color': '#999'});
                        $('#s2id_ambito a span:nth-child(1)').html('Select Ambito').css({'color': '#999'});

                        $scope.odpe = data.o;
                        $scope.ambito = data.a;
                    });


            $scope.getUbigeo = function( ) {
                $http.get("../agrupacion/ubigeo/" + $scope.odpeitem).
                        success(function(data, status, headers, config) {
                            console.log(data.u);
                            $scope.departamento = data.u;
                        });
            };

            $scope.getAmbito = function( ) {
                $http.get("../agrupacion/ambito/" + $scope.ambitoitem).
                        success(function(data, status, headers, config) {
                            $scope.dep = data.dep;
                            $scope.pro = data.pro;
                            $scope.dis = data.dis;
                        });
            };



            $scope.getDepartamento = function( ) {
                $http.get("../agrupacion/codubigeo/" + $scope.deparamentoitem).
                        success(function(data, status, headers, config) {
                            console.log(data.d);
                            $scope.departamento = data.d;
                        });
            };

            $scope.getProvincia = function( ) {
                $http.get("../agrupacion/codubigeo/" + $scope.provinciaitem).
                        success(function(data, status, headers, config) {
                            console.log(data.p);
                            $scope.provincia = data.p;
                        });
            };

            $scope.getCargaTipEst = function( ) {
                $http.get("../agrupacion/datatipest").
                        success(function(data, status, headers, config) {
                            $scope.tipoagrupacion = data.ta;
                            $scope.estado = data.es;
                            //$scope.tipagrupacion = data.p;
                        });
            };

            $scope.getSaveAgrupacion = function( ) {
                $http.post("../agrupacion/saveagrupacion", $scope.formsave).
                        success(function(data, status, headers, config) {
                            console.log(data);
                        });
            };
        });
        