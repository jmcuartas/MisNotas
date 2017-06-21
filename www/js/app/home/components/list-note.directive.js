(function(){
    'use strict';

    angular
        .module('app.notes')
        .directive('listNoteDirective', listNoteDirective);

        function listNoteDirective(){
            return {
                restric: 'EA',
                templateUrl: 'js/app/home/components/list-notes.html',
                scope: {
                    list: '='                
                },
                controller: noteController
            }; 
        
        function noteController($scope, notesService){    
            $scope.remove = remove;

            function remove(id){
                $scope.list = notesService.remove(id);
            }
        };   
    }
})();



    