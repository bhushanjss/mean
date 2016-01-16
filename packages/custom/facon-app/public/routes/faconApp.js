'use strict';

angular.module('mean.facon-app').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('faconApp example page', {
      url: '/faconApp/example',
      templateUrl: 'facon-app/views/index.html'
    });
  }
]);
