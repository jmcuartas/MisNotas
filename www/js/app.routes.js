angular
    .module('starter')

    .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'js/app/menu/menu.html'
      })

      .state('app.settings', {
        url: '/settings',
        cache: false,
        views: {
          'content' : {
            templateUrl: 'js/app/settings/settings.html',
            controller: 'settingsController',
            controllerAs: 'vm'
          }
        }
      })

      .state('app.about', {
        url: '/about',
        cache: false,
        views: {
          'content' : {
            templateUrl: 'js/app/about/about.html'
          }
        }
      })

    $urlRouterProvider.otherwise('/app/notes');
  });