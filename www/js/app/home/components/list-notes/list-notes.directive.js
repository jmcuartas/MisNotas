(function () {
  'use strict';

  angular
    .module('app.notes')
    .directive('listNotesDirective', listNotesDirective);

  function listNotesDirective() {
    return {
      restric: 'EA',
      templateUrl: 'js/app/home/components/list-notes/list-notes.html',
      scope: {
          list: '=',
        },
      controller: noteController,
    };

    function noteController($scope, notesService) {
      $scope.remove = remove;
      $scope.getDate = getDate;

      function remove(id) {
        $scope.list = notesService.remove(id);
      }

      function getDate(date) {
        if (new Date(date).toDateString() < new Date().toDateString()) {
          return new Date(date).toLocaleDateString();
        }
        return new Date(date).toLocaleTimeString();
      }
    }
  }
})();
