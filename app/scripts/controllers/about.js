'use strict';

/**
 * @ngdoc function
 * @name vaibhavProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vaibhavProjectApp
 */
angular.module('vaibhavProjectApp')
  .controller('AboutCtrl', function ($http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    var vm = this;

    vm.form = {
    	"name" : "",
    	"email" : "",
    	"time" : "",
    	"repeat" : 1,
    	"description" : "",
    	"active" : 1
    }

    vm.message = "";

    vm.isResult = false;


    vm.submit = function create(form) {

	    	vm.form = {
	    	"name" : "",
	    	"email" : "",
	    	"time" : "",
	    	"repeat" : 1,
	    	"description" : "",
	    	"active" : 1
	    }
		form.time = +new Date(form.time)
    	console.log(form.time)
    	$http.post("http://localhost:8080/reminder",form)
    	.then(function(data) {
    		vm.isResult = true;
    		console.log(data)
    	})
    	.catch(function (err) {
    		vm.isResult = true;
    		console.log(err)
    	})
    }
  });
