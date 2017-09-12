'use strict';

var dataService = angular.module('vaibhavProjectApp')
.factory('dataService', function() {
  var dataService = {};

  dataService.email = '';

  function setEmail(email) {
  	dataService.email = email;
  }

  dataService.setEmail = setEmail;


  // factory function body that constructs shinyNewServiceInstance
  return dataService;
});