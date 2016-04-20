'use strict';

angular.module('mean.media-management').factory('MediaManagement',['$resource', 'cloudinary',
  function($resource, cloudinary) {
  	var url = cloudinary.url('photo', {format: 'json', type: 'list'});
    //cache bust
    url = url + "?" + Math.ceil(new Date().getTime()/1000);
    return $resource(url, {}, {
      photos: {method:'GET', isArray:false}
    });
  }
]);
