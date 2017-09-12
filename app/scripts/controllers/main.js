'use strict';

/**
 * @ngdoc function
 * @name vaibhavProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vaibhavProjectApp
 */
angular.module('vaibhavProjectApp')
  .controller('MainCtrl', function ($http,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var vm = this;

    vm.email = '';
    vm.password = '';
    vm.message = '';
    console.log("WTF");

    var login = function(email,password) {
    	var body = {
    		email: email,
    		password : password
    	};

    	$http.post('http://localhost:8080/login',body)
    	.then(function(result){
    		if(result.data.isValid) {
    			$location.path('/home');
    		} else {
    			vm.message = result.data.message;
    		}
    	}).
    	catch(function(error) {
    		console.log(error);
    	});
    };

    vm.login = login;
  });
