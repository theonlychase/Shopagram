(function() {
    'use strict';

angular
  .module('personal-project')
  .controller('dashboardCtrl', dashboardCtrl);

  function dashboardCtrl($state, AuthService) {
    var vm = this;

    vm.logout = function () {
      // call logout from service
      AuthService.logout()
        .then(function () {
          $state.go('login');
        });
    };

  }

})();
