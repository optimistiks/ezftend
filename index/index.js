angular.module('index', [
  'ui.bootstrap',
  'ui.utils',
  'ui.router',
  'ngAnimate'
]);

angular.module('index').config(function ($stateProvider) {

  $stateProvider.state('index', {
    url: '/',
    templateUrl: 'index/partial/index/index.html'
  });
  $stateProvider.state('add', {
    url: '/add',
    templateUrl: 'index/partial/add/add.html'
  });
  $stateProvider.state('profile', {
    url: '/profile',
    templateUrl: 'index/partial/profile/profile.html'
  });
  $stateProvider.state('search', {
    url: '/search',
    templateUrl: 'index/partial/search/search.html'
  });
  $stateProvider.state('text', {
    url: '/text/:id',
    templateUrl: 'index/partial/text/text.html'
  });
  /* Add New States Above */

});

