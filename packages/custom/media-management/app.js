'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var MediaManagement = new Module('media-management');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
MediaManagement.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  MediaManagement.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  MediaManagement.menus.add({
    title: 'Media Management',
    link: 'mediaManagement example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  MediaManagement.aggregateAsset('css', 'mediaManagement.css');
  MediaManagement.aggregateAsset('js', '../lib/lodash/lodash.js',{global:false, weight: -5});
  MediaManagement.aggregateAsset('js', '../lib/cloudinary-core/cloudinary-core.js',{global:false, weight: -4});
  MediaManagement.aggregateAsset('js', '../lib/ng-file-upload/ng-file-upload-shim.js');
  MediaManagement.aggregateAsset('js', '../lib/cloudinary_ng/js/angular.cloudinary.js');
  MediaManagement.aggregateAsset('js', '../lib/ng-file-upload/ng-file-upload.js');
  MediaManagement.aggregateAsset('js', '../lib/angular-resource/angular-resource.js');
  MediaManagement.aggregateAsset('js', '../lib/angular-animate/angular-animate.js');

  MediaManagement.angularDependencies(['cloudinary', 'ngAnimate', 'ngResource', 'ngFileUpload']);
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    MediaManagement.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    MediaManagement.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    MediaManagement.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return MediaManagement;
});
