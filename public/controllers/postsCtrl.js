(function() {
    'use strict';

angular
  .module('personal-project')
  .controller('postsCtrl', postsCtrl);

  function postsCtrl(postsResolve, userService) {
    var vm = this;

    vm.posts = postsResolve;

    vm.initModals = function() {
      $('.modal-trigger').leanModal(); // Initialize the modals
    };

    vm.getAuthedUser = function() {
      userService.getAuthedUser().then(function(data) {
        console.log(data);
        vm.authedUser = data;
      });
    };
    vm.getAuthedUser();

    //vm.finalData = JSON.parse(localStorage.getItem('instaData'));
    //console.log(vm.finalData); This is for localstorage

    vm.addProduct = function(index) {
      console.log(vm.posts[index].image);
      vm.imageURL = vm.posts[index].image;
    };

    vm.postNewProduct = function () {
      var newProduct = {
        user: vm.authedUser,
        picture: vm.imageURL,
        url: vm.url
      };
      userService.postNewProduct(newProduct)
        .then(function(data) {
          console.log(data);
        });
      vm.url = "";
    };

  }


})();
