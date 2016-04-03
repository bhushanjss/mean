'use strict';

angular.module('mean.media-management').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('mediaManagement', {
      url: '/mediaManagement',
      templateUrl: 'media-management/views/index.html'
    });    
  }
]).config(['cloudinaryProvider', function(cloudinaryProvider) {
	cloudinaryProvider
      .set("cloud_name", "facon-networks")
      .set("upload_preset", "zpowxzxp");
}]);
