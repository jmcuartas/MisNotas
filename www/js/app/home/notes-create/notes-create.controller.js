(function(){
    'use strict';

    angular
        .module('app.notes')
        .controller('NotesCreateController', NotesCreateController);

    function NotesCreateController($scope, $state, notesService){
        var vm = this;

        activate();

        vm.save = save;

        function activate(){
            vm.nota = {id: new Date().getTime().toString(), title: '', description: ''};
        }
        
        function save(){
            notesService.create(vm.nota);
            $state.go('app.notes');
        }
    };
})();

