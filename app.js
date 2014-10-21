angular.module('ezdictFrontend', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'index', 'landing']);

angular.module('ezdictFrontend').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/');

});

angular.module('ezdictFrontend').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
