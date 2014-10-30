angular.module('profile', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('profile').config(function($stateProvider) {

    $stateProvider.state('profile', {
        abstract: true,
        url: '/profile',
        templateUrl: 'profile/partial/profile/profile.html'
    });
    $stateProvider.state('profile.personal', {
        url: '/personal',
        templateUrl: 'profile/partial/profile.personal/profile.personal.html'
    });
    /* Add New States Above */

});

