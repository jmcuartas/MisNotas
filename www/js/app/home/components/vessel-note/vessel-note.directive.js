(function(){
    'use strict';

    angular 
        .module('app.notes')
        .directive('vesselNoteDirective', vesselNoteDirective);

    function vesselNoteDirective(){
        return {
            restrict: 'EA',
            templateUrl: 'js/app/home/components/vessel-note/vessel-note.html',            
            scope: {
                id: '='
            },
            controller: noteController
        };

        function noteController($scope, $state, notesService){
            activate();

            $scope.save = save;

            function activate(){
                var id = $state.params.id;
                if(angular.isUndefined(id))                 
                    $scope.nota = {id: new Date().getTime().toString(), title: '', description: ''};
                else
                    $scope.nota = angular.copy(notesService.get(id));
            }

            function save(){
                if(angular.isUndefined($state.params.id))
                    notesService.create($scope.nota);
                else
                    notesService.update($scope.nota);

                $state.go('app.notes');
            }
        }
    };
})();