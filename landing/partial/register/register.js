angular.module('landing').controller('RegisterCtrl', function ($scope, $state) {
  $scope.register = function () {
    $state.go('index');
  };
});
