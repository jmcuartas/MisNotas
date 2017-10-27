(function () {
  'use strict';

  angular
    .module('app.notes', [])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider

      .state('app.notes', {
        url: '/notes',
        cache: false,
        views: {
          'content': {
            templateUrl: 'js/app/home/notes/notes.html',
            controller: 'NotesController',
            controllerAs: 'vm',
          },
        },
      })

      .state('app.notes-edit', {
        url: '/notes-edit/:id',
        cache: false,
        views: {
            'content': {
              templateUrl: 'js/app/home/notes-edit/notes-edit.html',
              controller: 'NotesEditController',
              controllerAs: 'vm',
            },
          },
      })

      .state('app.notes-create', {
        url: '/notes-create',
        cache: false,
        views: {
          'content': {
            templateUrl: 'js/app/home/notes-create/notes-create.html',
            controller: 'NotesCreateController',
            controllerAs: 'vm',
          },
        },
      });
    });
})();
