app.factory("cargaFactory", function() {
    return {
        inicializar: function(scope) {
            /***** INICIALIZACION DE MESSAGE *****/
            scope.filter = {};
            scope.message_content = {};
            scope.message_content.show = false;
            scope.message = {};
            scope.message.show = false;
            scope.viewlist = false;
            scope.viewsearch = false;
            scope.listPreviewData = {};
            scope.tpo = '';
            scope.buttonGuardar = false;
            scope.filename = '';
            scope.message_guardar = {};
            scope.data_guardada = null;
            scope.showerror = false;
            scope.msjerrorexcel = '';
            scope.filenameerrors = '';
            scope.showcargadefinitiva = true;
        }

    };
});

app.service("cargaService", function() {

});

app.filter("toUpper", function() {
    return function(text) {
        if (text === ':message') {
            return text.toUpperCase();
        }
        else {
            return text;
        }
    }
})

app.controller("ctrlCargaMasivaOrganizacionesCandidatos", ['$scope', '$http', '$timeout', '$log', 'cargaFactory', 'cargaService', function(scope, http, timeout, log, cargFactory, cargService) {
        eventoUpload(scope);
        cargFactory.inicializar(scope);

        scope.mostrarSearch = function() {
            scope.viewsearch = !scope.viewsearch;
            if (!scope.viewsearch) {
                scope.filter = {};
            }
        };

        scope.previewData = function(data) {
            console.log(data);
            scope.listPreviewData = data.data;
            scope.showerror = data.showerror;
            if (scope.showerror) {
                scope.msjerrorexcel = 'msjerror-excel';
            }
            scope.viewlist = true;
            scope.buttonGuardar = true;
            scope.filename = data.filename;
            scope.filenameerrors = data.filenameerrors;
            scope.data_guardada = null;
            scope.showcargadefinitiva = true;
            scope.$apply();
        };

        scope.ocultarpreviewData = function() {
            scope.viewlist = false;
            scope.listPreviewData = {};
            scope.buttonGuardar = false;
            scope.message_content.show = false;
            scope.$apply();
        };
        scope.previewDataClean = function() {
            scope.listPreviewData = {};
            scope.buttonGuardar = false;
            scope.viewlist = false;
            scope.message_content.show = false;
            scope.$apply();
        };

        scope.guardaCargaArchivo = function() {
            var url = C_SERVER + '/utilitarios/cargamasiva/grabacionDefinitiva';
            http.post(url, {'filename': scope.filename})
                    .success(function(data, status) {
                        console.log(data);
                        angular.element('#message').html('');
                        scope.message_content = data;
                        scope.showcargadefinitiva = false;
                    }).error(function(data, status) {
                scope.message_content = data;
            });

        };
        scope.botonClean = function() {
            scope.buttonGuardar = false;
        };

        scope.clearn = function() {
            if (scope.filter.n.length == 0) {
                delete scope.filter.n;
            }
        };

        scope.clear_ub = function() {
            if (scope.filter.ubigeo.length == 0) {
                delete scope.filter.ubigeo;
            }
        };

        scope.clear_ele = function() {
            if (scope.filter.ambito_de_eleccion.length == 0) {
                delete scope.filter.ambito_de_eleccion;
            }
        };

        scope.clear_dep = function() {
            if (scope.filter.departamento.length == 0) {
                delete scope.filter.departamento;
            }
        };

        scope.clear_pro = function() {
            if (scope.filter.provincia.length == 0) {
                delete scope.filter.provincia;
            }
        }

        scope.clear_dis = function() {
            if (scope.filter.distrito.length == 0) {
                delete scope.filter.distrito;
            }
        };

        scope.clear_org = function() {
            if (scope.filter.organizacion_politica.length == 0) {
                delete scope.filter.organizacion_politica;
            }
        };
        scope.clear_tipo = function() {
            if (scope.filter.tipo_de_op.length == 0) {
                delete scope.filter.tipo_de_op;
            }
        };

        scope.clear_est = function() {
            if (scope.filter.estado_de_listas.length == 0) {
                delete scope.filter.estado_de_listas;
            }
        };

        scope.clear_res = function() {
            if (scope.filter.resolucion.length == 0) {
                delete scope.filter.resolucion;
            }
        };

        scope.clear_pos = function() {
            if (scope.filter.posicion_del_candidato.length == 0) {
                delete scope.filter.posicion_del_candidato;
            }
        };
        scope.clear_carg = function() {
            if (scope.filter.cargo.length == 0) {
                delete scope.filter.cargo;
            }
        };
        scope.clear_dni = function() {
            if (scope.filter.dni.length == 0) {
                delete scope.filter.dni;
            }
        };
        scope.clear_nom = function() {
            if (scope.filter.nombre.length == 0) {
                delete scope.filter.nombre;
            }
        };
        scope.clear_app = function() {
            if (scope.filter.ape_pat.length == 0) {
                delete scope.filter.ape_pat;
            }
        };
        scope.clear_apm = function() {
            if (scope.filter.ape_mat.length == 0) {
                delete scope.filter.ape_mat;
            }
        };

        scope.clear_sex = function() {
            if (scope.filter.sexo.length == 0) {
                delete scope.filter.sexo;
            }
        };

        scope.clear_estc = function() {
            if (scope.filter.estado_de_candidato.length == 0) {
                delete scope.filter.estado_de_candidato;
            }
        };
    }]);