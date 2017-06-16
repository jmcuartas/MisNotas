angular
    .module('NotesModule')
    .controller('NotesCreateController', NotesCreateController);

    function NotesCreateController($scope, $state, noteservice){
        var vm = this;

        activate();

        vm.save = save;

        function activate(){
            vm.nota = {id: new Date().getTime().toString(), title: '', description: ''};
        }
        
        function save(){
            noteservice.create(vm.nota);
            $state.go('app.notes');
        }
    };