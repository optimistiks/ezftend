angular.module('profile').controller('ProfilePrivateCtrl', function ($scope, $modal) {
  $scope.initEmailChange = function ($event) {
    $event.preventDefault();
    $modal.open({
      templateUrl: 'profile/emailChange/emailChange.html',
      controller: 'EmailchangeCtrl'
    }).result.then(function (result) {
        // do something with the result
      });
  };

  $scope.initPasswordChange = function ($event) {
    $event.preventDefault();
    $modal.open({
      templateUrl: 'profile/passwordChange/passwordChange.html',
      controller: 'PasswordchangeCtrl'
    }).result.then(function (result) {
        // do something with the result
      });
  };

});
