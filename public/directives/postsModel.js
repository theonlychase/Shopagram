angular.module('personal-project')

  .directive('postsmodel', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/postsmodel.html',
      link: function(scope, element, attributes) {
        $(document).ready(function(){
          // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
          $('.modal-trigger').leanModal();
          
          $('.collapsible').collapsible({
            accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
          });
        });
      }
    };


  });
