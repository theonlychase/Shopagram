(function() {
    'use strict';

angular.module('personal-project', [
  'ui.router',
])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider
      .otherwise('/dashboard/overview');
      //cookies, localstorage or session storage. these are parts of the browser.

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
      //Nested Views//
      .state('dashboard.settings', {
        url: '/settings',
        templateUrl: 'partials/settings.html',
        controller: 'settingsCtrl'
      })
      .state('dashboard.overview', {
        url: '/overview',
        templateUrl: 'partials/overview.html',
        controller: 'overviewCtrl'
      })
      .state('dashboard.posts', {
        url: '/posts',
        templateUrl: 'partials/posts.html',
        controller: 'postsCtrl'
      });

  });

})();
