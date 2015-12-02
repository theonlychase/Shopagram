(function() {
    'use strict';

angular
  .module('personal-project')
  .controller('registerCtrl', registerCtrl);

  function registerCtrl($location, AuthService) {
    var vm = this;

    console.log(AuthService.getUserStatus());

    vm.register = function () {

      // initial values
      vm.error = false;
      vm.disabled = true;

      // call register from service
      AuthService.register(vm.registerForm.username, vm.registerForm.password)
        // handle success
        .then(function () {
          $location.path('/login');
          vm.disabled = false;
          vm.registerForm = {};
        })
        // handle error
        .catch(function () {
          vm.error = true;
          vm.errorMessage = "Something went wrong!";
          vm.disabled = false;
          vm.registerForm = {};
        });

    };

  }


})();
