'use strict';

/**
 * @ngdoc function
 * @name vaibhavProjectApp.controller:RegisterCtrl
 * @description
 * # MainCtrl
 * Controller of the vaibhavProjectApp
 */
angular.module('vaibhavProjectApp')
  .controller('RegisterCtrl', function ($http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var vm = this;
    vm.message = 'Please register';

    vm.user = {
      name: '',
      email: '',
      password: ''
    };


    var register = function(user) {
      $http.post('http://localhost:8080/register',user)
      .then(function(response) {
        console.log(response.data);
        if(response.data.isValid) {
          console.log("User Successfully Registered");
          vm.message = "User Successfully Registered"
        }
        else {
          vm.message = "Email ID already exists";
        }
      })
      .catch(function(error) {
        console.log(error);

      });
    };

    vm.registerUser = register;


  });
