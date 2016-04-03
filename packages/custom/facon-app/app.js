'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var FaconApp = new Module('facon-app');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
FaconApp.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  FaconApp.routes(app, auth, database);
  
  FaconApp.aggregateAsset('css', 'faconApp.css');

  FaconApp.aggregateAsset('js', '../lib/jQuery/dist/jQuery.js',{global:false, weight: -5});
  FaconApp.aggregateAsset('js', '../lib/spritespin/release/spritespin.js',{global:false, weight: -4});
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    FaconApp.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    FaconApp.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    FaconApp.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return FaconApp;
});
