angular.module('index').controller('IndexCtrl',function($scope, $modal){

  $scope.read = function($event) {
    if (!$scope.isAuthenticated) {
      $modal.open({
        templateUrl: 'landing/registerPrompt/registerPrompt.html',
        controller: 'RegisterpromptCtrl'
      }).result.then(function(result){
          console.log(result);
        });
    } else {
      throw new Error('Not implemented');
    }
  };

});