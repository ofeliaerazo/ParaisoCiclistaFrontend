'use strict';

angular.module('paraisoCiclistaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('retirarParqueo', {
        url: '/retirarParqueo',
        template: '<retirar-parqueo></retirar-parqueo>'
      });
  });
