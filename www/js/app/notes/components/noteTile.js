angular
    .module('NotesModule')
    .directive('notesTile', notesTile);

    function notesTile(){
        return {
            restric: 'EA',
            templateUrl: 'js/app/notes/components/ceNote.html',
            scope: {
                list: '='                
            },
            controller: paco
        }; 
        function paco($scope, noteservice){    
            $scope.remove = remove;

            function remove(id){
                $scope.list = noteservice.remove(id);
            }

        };   
    }


    