'use strict';

angular.module('paraisoCiclistaApp', [
  'paraisoCiclistaApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .constant("API","http://192.168.1.14:8080/ParaisoCiclistaBackend")
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
