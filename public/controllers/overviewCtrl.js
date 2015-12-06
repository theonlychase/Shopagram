(function() {
    'use strict';

angular
  .module('personal-project')
  .controller('overviewCtrl', overviewCtrl);

  function overviewCtrl(apiService, $state) {
    var vm = this;

    vm.getProfile = function() {
      //apiService.fetchInstagram().then(function (dataFromService) {
        //vm.finalData = dataFromService;
        //localStorage.setItem('instaData', JSON.stringify(vm.finalData)); This is for localstorage
        $state.go('dashboard.posts');
    };

  }


})();
