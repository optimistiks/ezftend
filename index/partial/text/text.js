angular.module('index').controller('TextCtrl', function ($log, $scope, $stateParams, $rootScope, event) {
  $scope.id = $stateParams.id;

  $rootScope.$on(event.TEXT_SELECT, function ($event, text) {
    $log.debug('index.controller.TextCtrl', 'text select', text);
  });
});
