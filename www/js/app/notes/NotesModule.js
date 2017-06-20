angular
    .module('NotesModule', ['ngStorage'])
    .config(function ($stateProvider, $urlRouterProvider){
        $stateProvider

            .state('app.notes', {
                url: '/notes',
                cache: false,
                views: {
                    'content': {
                        templateUrl: 'js/app/notes/Notes/notes.html',
                        controller: 'NotesController',
                        controllerAs: 'vm'
                    }
                }
            })

            .state('app.notes-edit', {
                url: '/notes-edit/:id',
                cache: false,
                views: {
                    'content': {
                        templateUrl: 'js/app/notes/NotesEdit/edit.html',
                        controller: 'NotesEditController',
                        controllerAs: 'vm'
                    }
                }
            })

            .state('app.notes-create', {
                url: '/notes-create',
                cache: false,
                views: {
                    'content': {
                        templateUrl: 'js/app/notes/NotesCreate/create.html',
                        controller: 'NotesCreateController',
                        controllerAs: 'vm'
                    }
                }
            });
    })