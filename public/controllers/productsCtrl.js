(function() {
    'use strict';

angular
  .module('personal-project')
  .controller('productsCtrl', productsCtrl);

  function productsCtrl(userService) {
    var vm = this;

    vm.getCreatedProducts = function() {
      userService.getCreatedProducts().then(function(response) {
        vm.createdProducts = response;
        console.log(vm.createdProducts);
      });
    };
    vm.getCreatedProducts();

  vm.removeProduct = function(id) {
    console.log('hello');
    userService.removeProduct(id).then(function(response) {
      vm.createdProducts = response;
    });
  };

}


})();
