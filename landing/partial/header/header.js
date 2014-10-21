angular.module('landing').controller('HeaderCtrl',function($scope, $modal){

    $scope.openLoginModal = function($event) {
        $event.preventDefault();
        $modal.open({
          templateUrl: 'landing/login/login.html',
          controller: 'LoginCtrl'
      }).result.then(function(result){
          console.log(result);
      });
    };

});