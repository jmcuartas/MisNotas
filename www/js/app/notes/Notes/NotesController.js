angular
    .module('NotesModule')
    .controller('NotesController', NotesController);

    function NotesController($scope, noteservice){
        var vm = this;

        vm.remove = remove;

        $scope.$on('$ionicView.beforeEnter', function(){
            initView()
        });

        function initView(){
            vm.notes = noteservice.list();
        };

        function remove(id){
            vm.notes = noteservice.remove(id);
        }

    };