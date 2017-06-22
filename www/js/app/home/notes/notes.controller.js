(function(){
    'use strict';

    angular
        .module('app.notes')
        .controller('NotesController', NotesController);

    function NotesController($scope, notesService){
        var vm = this; 

        vm.hiddenSearch = hiddenSearch;
        vm.search = search; 


        $scope.$on('$ionicView.beforeEnter', function(){
            initView()
        });

        function initView(){
            vm.notes = notesService.list();  
            vm.show = false;      
        };

        function hiddenSearch(){
            if(vm.show)
                vm.show = false;
            else
                vm.show = true;            
        }

        function search(){
            
        };
    };
})();
