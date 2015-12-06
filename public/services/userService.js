(function() {
    'use strict';

angular
  .module('personal-project')
  .service('userService', userService);

  function userService($http, $q) {
      var vm = this;

      vm.postNewProduct = function(product) {
        return $http.post('/api/pictures', product)
          .then(function(response) {

            console.log(response);
            return "product added!";
          }, function (error) {
            console.log(error);
            return error;
          });
      };

      vm.getAuthedUser = function() {
        return $http.get('/api/user/authenticatedUser')
          .then(function(response) {
            console.log(response);
            return response.data;
          });
      };

      vm.getCreatedProducts = function() {
        return $http.get('/api/pictures/')
          .then(function(response) {
            console.log(response);
            return response.data;
          });
      };

      vm.removeProduct = function(id) {
        return $http.delete('/api/pictures/' + id)
          .then(function(response) {
            console.log(response);
            return response.data;
          });
      };

  }

})();
