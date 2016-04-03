'use strict';

angular.module('mean.facon-app').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('faconApp', {
      url: '/faconApp',
      templateUrl: 'facon-app/views/index.html'
    });
  }
]);
