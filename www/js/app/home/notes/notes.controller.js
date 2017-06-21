(function(){
    'use strict';

    angular
        .module('app.notes')
        .controller('notesController', notesController);

    function notesController($scope, notesService){
        var vm = this;

        vm.remove = remove;

        $scope.$on('$ionicView.beforeEnter', function(){
            initView()
        });

        function initView(){
            vm.notes = notesService.list();
        };

        function remove(id){
            vm.notes = notesService.remove(id);
        }

    };
})();
