(function() {
    'use strict';

angular
  .module('personal-project')
  .controller('shopCtrl', shopCtrl);

  function shopCtrl(userService) {
    var vm = this;

    vm.getCreatedProducts = function() {
      userService.getCreatedProducts().then(function(response) {
        vm.createdProducts = response;
        console.log(vm.createdProducts);
      });
    };
    vm.getCreatedProducts();

  }


})();
