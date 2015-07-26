var app = angular.module("app", [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
});

var C_SERVER = 'http://localhost/sigao/public';

//var C_TODOS = '100';
//var C_NACIONAL = '00';
//var C_DEPARTAMENTAL = '01';
//var C_PROVINCIAL = '02';
//var C_DISTRITAL = '03';
//
//var C_TIPO_NACIONAL = '1';
//var C_TIPO_REGIONAL = '2';
//var C_TIPO_PROVINCIAL = '3';
//var C_TIPO_DISTRITAL = '4';
//var C_LIMA_PROV = '140100';
//var C_CALLAO_PROV = '240100';

