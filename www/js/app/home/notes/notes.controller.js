(function(){
    'use strict';

    angular
        .module('app.notes')
        .controller('NotesController', NotesController);

    function NotesController($scope, notesService){
        var vm = this;      

        $scope.$on('$ionicView.beforeEnter', function(){
            initView()
        });

        function initView(){
            vm.notes = notesService.list();
        };
    };
})();
