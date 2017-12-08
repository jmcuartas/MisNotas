(function () {
  'use strict';

  angular
    .module('app.notes')
    .directive('footerNoteDirective', footerNoteDirective);

    function footerNoteDirective() {
      return {
        restrict: 'EA',
        templateUrl: 'js/app/home/components/footer-note/footer-note.html',
        controller: noteController,
      };

      function noteController($scope, $ionicActionSheet) {
        $scope.deleteNote = deleteNote;
        $scope.media = media;
        $scope.share = share;

        function deleteNote() {
          console.log('delete');
        }

        function media() {
          var options = {
            buttons: [
              { text: 'Hacer foto' },
              { text: 'Fototeca' }
            ],

            cancelText: 'Cancel',

            cancel: function() {
              // add cancel code...
            },

            buttonClicked: function(index) {
              if(index === 0) {
                 // add edit 1 code
                 console.log(index);
              }

              if(index === 1) {
                 // add edit 2 code
                 console.log(index);

              }
            }
          };

         showAction(options);
        }

        function share() {
          console.log('share');
        }

        function showAction(options) {
          var showActionSheet = $ionicActionSheet.show(options);
        }
      }
    }
})();
