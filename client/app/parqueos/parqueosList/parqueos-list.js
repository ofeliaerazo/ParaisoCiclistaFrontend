'use strict';

angular.module('paraisoCiclistaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('parqueosList', {
        url: '/parqueosList',
        template: '<parqueos-list></parqueos-list>'
      });
  });
