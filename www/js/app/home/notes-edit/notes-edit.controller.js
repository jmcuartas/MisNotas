(function(){
    'use strict';

    angular
        .module('app.notes')
        .controller('NotesEditController', NotesEditController);

    function NotesEditController($scope, $state, notesService){
        var vm = this;

        activate();

        vm.save = save;

        function activate () {
            var id = $state.params.id;
            vm.nota = angular.copy(notesService.get(id));
        }

        function save(){
            notesService.update(vm.nota);
            $state.go('app.notes');
        }
    }
})();