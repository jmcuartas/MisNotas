(function () {
  'use strict';

  angular
    .module('app.notes')
    .controller('NotesCreateController', NotesCreateController);

  function NotesCreateController($scope, $state, notesService, guidService) {
    var vm = this;

    activate();

    vm.save = save;

    function activate() {
      vm.nota = { id: guidService.getGUID(), date: new Date().toJSON(), title: '', description: '' };
    }

    function save() {
      notesService.create(vm.nota);
      $state.go('app.notes');
    }
  }

})();
