(function() {
    'use strict';

angular
  .module('personal-project')
  .service('apiService', apiService);

  var accessToken = "";

  function apiService($http, $q) {
      var vm = this;

      var formatProfileData = function(data) {
        return {
          image: data.images.standard_resolution.url
        };
      };

      vm.fetchInstagram = function() {
        var deferred = $q.defer();

        $http({
          method: 'JSONP',
          url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + accessToken + '&callback=JSON_CALLBACK'
        }).then(function(response) {
          var parsedResponse = response.data.data;
          var instaProfile = [];
          for (var i = 0; i < parsedResponse.length; i++) {
            instaProfile.push(formatProfileData(parsedResponse[i]));
          }
          deferred.resolve(instaProfile);
          console.log(instaProfile);
        });
        return deferred.promise;
      };

  }

})();
