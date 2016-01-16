'use strict';

/* jshint -W098 */
angular.module('mean.media-management').controller('MediaManagementController', ['$scope', 'Global', 'MediaManagement',
  function($scope, Global, MediaManagement) {
    $scope.global = Global;
    $scope.package = {
      name: 'media-management'
    };
  }
]);
