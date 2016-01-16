'use strict';

angular.module('mean.media-management').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('mediaManagement example page', {
      url: '/mediaManagement/example',
      templateUrl: 'media-management/views/index.html'
    });
  }
]);
