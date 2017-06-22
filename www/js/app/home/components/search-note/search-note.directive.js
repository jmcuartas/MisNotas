(function () {
    'use strict';

    angular
        .module('app.notes')
        .directive('searchNoteDirective', searchNoteDirective);

    function searchNoteDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'js/app/home/components/search-note/search-note.html',
            scope: {

            },
            replace: true,           
            controller: controller
        };    

        function controller($scope, $ionicNavBarDelegate) {
           
        }
    };
})();