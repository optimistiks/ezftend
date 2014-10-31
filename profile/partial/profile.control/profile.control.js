angular.module('profile').controller('ProfileControlCtrl', function ($scope, $modal) {

  $scope.settings = function ($event) {
    $event.preventDefault();
    $modal.open({
      templateUrl: 'profile/controlSettings/controlSettings.html',
      controller: 'ControlsettingsCtrl'
    }).result.then(function (result) {
        //do something with the result
      });
  };

});
