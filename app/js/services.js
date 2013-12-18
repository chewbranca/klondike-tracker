'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [], function($provide) {
    $provide.factory('pouchdb', function() {
        return new PouchDB('klondike-trainer');
    });
}).
  value('version', '0.2');
