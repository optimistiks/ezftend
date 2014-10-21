angular.module('index').controller('HeaderCtrl',function($scope, $state){

$scope.search = function($event) {
        $state.go('search');
    };

});