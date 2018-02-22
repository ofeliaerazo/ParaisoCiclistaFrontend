'use strict';

function parqueosService(API, $resource){
	return $resource(API + "/parqueo/:codigoFicha",{
		codigoFicha:"@codigoFicha"
	},{

		update:{
			method:'PUT'
		},


		buscar:{
			url: API + "/parqueo/find",
			method: "GET",
			isArray: false
		},
	});
}

angular.module('paraisoCiclistaApp')
	.factory('parqueosService', parqueosService);
