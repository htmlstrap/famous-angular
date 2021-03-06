
//TODO:  DOCUMENT

angular.module('famous.angular')
  .directive('faAnimateEnter', ["$parse", "$famousDecorator", function ($parse, $famousDecorator) {
    return {
      restrict: 'A',
      scope: false,
      priority: 16,
      compile: function () {
        return {
          post: function (scope, element, attrs) {
            var isolate = $famousDecorator.ensureIsolate(scope);
            isolate.$$animateEnterHandler = $parse(attrs.faAnimateEnter);

            attrs.$observe('faAnimateEnter', function () {
              isolate.$$animateEnterHandler = $parse(attrs.faAnimateEnter);
            });
          }
        };
      }
    };
  }]);