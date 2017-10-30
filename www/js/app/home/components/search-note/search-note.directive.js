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
          list: '=',
          cleanInput: '=',
        },
      replace: true,
      controller: controller,
    };

    function controller($scope, notesService) {
      $scope.onSearchChange = onSearchChange;

      function onSearchChange() {
        if ($scope.cleanInput) {
          $scope.list = notesService.list().filter(function (elem) {
            return elem.title.toLowerCase().indexOf($scope.search.toLowerCase()) > -1 ||
            elem.description.toLowerCase().indexOf($scope.search.toLowerCase()) > -1;
          });
        } else {
          return $scope.list = notesService.list();
        }
      }
    }
  }
})();
