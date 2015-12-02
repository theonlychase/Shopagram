(function() {
    'use strict';

var myApp = angular.module('personal-project', [
  'ui.router',
])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider
      .otherwise('/login');
      //cookies, localstorage or session storage. these are parts of the browser.

    $stateProvider
      .state('dashboard', {
        url: '/dashboard', //url: '/:user/dashboard',
        templateUrl: 'partials/dashboard.html',
        controller: 'dashboardCtrl as dashboard',
        abstract: true,
        authenticate: true
      })
      .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl as login',
        authenticate: false
      })
      .state('register', {
        url: '/register',
        templateUrl: 'partials/register.html',
        controller: 'registerCtrl as register',
        authenticate: false
      })
      .state('forgot-password', {
        url: '/forgot-password',
        templateUrl: 'partials/forgot-password.html',
        controller: 'forgotPasswordCtrl',
        authenticate: false
      })
      .state('shop', {
        url: '/shop:id', //url: '/:user/shop'
        templateUrl: 'partials/shop.html',
        controller: 'shopCtrl as shop',
        authenticate: false
      })
      //Nested Views//
      .state('dashboard.settings', {
        url: '/settings',
        templateUrl: 'partials/settings.html',
        controller: 'settingsCtrl as settings',
        authenticate: true
      })
      .state('dashboard.overview', {
        url: '/overview',
        templateUrl: 'partials/overview.html',
        controller: 'overviewCtrl as overview',
        authenticate: true
      })
      .state('dashboard.posts', {
        url: '/posts',
        templateUrl: 'partials/posts.html',
        controller: 'postsCtrl as posts',
        authenticate: true
      })
      .state('dashboard.edit-product', {
        url: '/edit-product',
        templateUrl: 'partials/edit-product.html',
        controller: 'editProductCtrl as editProducts',
        authenticate: true
      });

  })

  .run(function ($rootScope, $state, AuthService) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    console.log('moving to', toState);
    if (toState.authenticate && AuthService.isLoggedIn() === false) {
      $state.transitionTo('login');
      event.preventDefault();
    }
  });
});

})();
