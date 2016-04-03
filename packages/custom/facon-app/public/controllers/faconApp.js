'use strict';

/* jshint -W098 */
angular.module('mean.facon-app').controller('FaconAppController', ['$scope', 'Global', 'FaconApp',
  function($scope, Global, FaconApp) {
    $scope.global = Global;
    $scope.package = {
      name: 'facon-app'
    };

    var frames = SpriteSpin.sourceArray('http://spritespin.ginie.eu/images/rad_zoom_{frame}.jpg', { 
    	frame: [1, 34], 
    	digits: 3 
	});

	var spin = $('#spritespin');
	var api;

	spin.spritespin({
    	source: frames,
    	width: 480,
    	sense: -1,
    	height: 327
	});
	api = spin.spritespin("api");
	
$('#prev').click(function(){
    api.stopAnimation();
    api.prevFrame();
});

$('#next').click(function(){
    api.stopAnimation();
    api.nextFrame();
});

$('#toggle').click(function(){
    api.toggleAnimation();
});

$('#reverse').click(function(){
    api.data.reverse = !api.data.reverse;
});
  }
]);
