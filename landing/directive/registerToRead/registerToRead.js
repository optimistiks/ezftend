angular.module('landing').directive('registerToRead', function ($modal) {
  return {
    replace: true,
    templateUrl: 'landing/directive/registerToRead/registerToRead.html',
    link: function (scope, element, attrs, fn) {

      scope.read = function ($event) {
        $event.preventDefault();
        if (!scope.isAuthenticated) {
          $modal.open({
            templateUrl: 'landing/registerPrompt/registerPrompt.html',
            controller: 'RegisterpromptCtrl'
          }).result.then(function (result) {
              console.log(result);
            });
        } else {
          throw new Error('Not implemented');
        }
      };

    }
  };
});
