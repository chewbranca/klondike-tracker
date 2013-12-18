'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', 'pouchdb', function($scope, pouchdb) {
      pouchdb.get('asdf', function(err, doc) {
          if (err) {
              console.log("Creating asdf");
              pouchdb.put({_id:"asdf", foo:"bar"});
          } else {
              console.log("GOT DOC: ", doc);
          }
      });

  }])
  .controller('MyCtrl2', [function() {

  }]);
