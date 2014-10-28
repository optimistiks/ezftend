angular.module('index').controller('AddCtrl', function ($scope, $state) {
  $scope.save = function () {
    $state.go('text', {id: 1});
  };
});
