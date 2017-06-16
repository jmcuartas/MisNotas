angular
    .module('NotesModule')
    .controller('NotesEditController', NotesEditController);

    function NotesEditController($scope, $state, noteservice){
        var vm = this;

        activate();

        vm.save = save;

        function activate () {
            var id = $state.params.id;
            vm.nota = angular.copy(noteservice.get(id));
        }

        function save(){
            noteservice.update(vm.nota);
            $state.go('app.notes');
        }
    }