angular.module('personal-project')

  .directive('repeatDone', function() {
   return function(scope, element, attrs) {
       if (scope.$last) { // all are rendered
           scope.$eval(attrs.repeatDone);
       }
   };

  });
