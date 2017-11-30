(function () {
  'use strict';

  angular
    .module('app.notes')
    .controller('NotesController', NotesController);

  function NotesController($scope, notesService, settingsService) {
    var vm = this;

    vm.hiddenSearch = hiddenSearch;

    $scope.$on('$ionicView.beforeEnter', function () {
      initView();
    });

    function initView() {
      vm.notes = notesService.list();
      vm.show = false;
      vm.fontSize = settingsService.getFontSize();
    }

    function hiddenSearch() {
      if (vm.show) {
        vm.show = false;
        initView();
      } else {
        vm.show = true;
      }
    }
  }
})();
