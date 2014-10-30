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
    $stateProvider.state('profile.rating', {
        url: '/rating',
        templateUrl: 'profile/partial/profile.rating/profile.rating.html'
    });
    $stateProvider.state('profile.control', {
        url: '/control',
        templateUrl: 'profile/partial/profile.control/profile.control.html'
    });
    /* Add New States Above */

});

