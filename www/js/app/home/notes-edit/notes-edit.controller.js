(function(){
    'use strict';

    angular
        .module('app.notes')
        .controller('NotesEditController', NotesEditController);

    function NotesEditController($scope, $state, notesService){
        var vm = this;
    }
})();