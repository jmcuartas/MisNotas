angular
    .module('starter')

    .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'js/app/menu/menu.html'
      })

      .state('app.about', {
        url: '/about',
        views: {
          'content' : {
            templateUrl: 'js/app/about/about.html'
          }
        }
      })

    $urlRouterProvider.otherwise('/app/notes');
  });