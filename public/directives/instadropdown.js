angular.module('personal-project')

  .directive('instadropdown', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/instadropdown.html',
      link: function(scope, element, attributes) {
        $( document ).ready(function () {

        $(".dropdown-button").dropdown();

        $(".button-collapse").sideNav();

        $('.collapsible').collapsible();

        });
      }
    };


  });
