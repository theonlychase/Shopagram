(function() {
    'use strict';

angular.module('personal-project', [
  'ui.router',
])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider
      .otherwise('/dashboard');

    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'partials/dashboard.html',
        controller: 'dashboardCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'partials/register.html',
        controller: 'registerCtrl'
      })
      .state('forgot-password', {
        url: '/forgot-password',
        templateUrl: 'partials/forgot-password.html',
        controller: 'forgotPasswordCtrl'
      })
      .state('dashboard.settings', {
        url: '/settings',
        templateUrl: 'partials/settings.html',
        controller: 'settingsCtrl'
      });

  });

})();
