'use strict';

/* jshint -W098 */
angular.module('mean.facon-app').controller('FaconAppController', ['$scope', 'Global', 'FaconApp',
  function($scope, Global, FaconApp) {
    $scope.global = Global;
    $scope.package = {
      name: 'facon-app'
    };
  }
]);
