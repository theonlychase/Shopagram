(function() {
    'use strict';

angular
  .module('personal-project')
  .controller('loginCtrl', loginCtrl);

  function loginCtrl($state, AuthService) {
    var vm = this;

    vm.login = function () {

  // initial values
  vm.error = false;
  vm.disabled = true;

  // call login from service
  AuthService.login(vm.loginForm.username, vm.loginForm.password)
    // handle success
    .then(function () {
      $state.go('dashboard.overview');
      vm.disabled = false;
      vm.loginForm = {};
    })
    // handle error
    .catch(function () {
      vm.error = true;
      vm.errorMessage = "Invalid username and/or password";
      vm.disabled = false;
      vm.loginForm = {};
    });

};


}


})();
