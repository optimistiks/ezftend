angular.module('landing', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('landing').config(function($stateProvider) {

    $stateProvider.state('register', {
        url: '/register',
        templateUrl: 'landing/partial/register/register.html'
    });
    /* Add New States Above */

});

