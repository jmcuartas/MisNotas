(function () {
  'use strict';

  angular
    .module('app.about', [])
    .controller('aboutController', aboutController);

  /* @ngInject */
  function aboutController($scope, settingsService) {
    var vm = this;

    $scope.$on('$ionicView.beforeEnter', function () {
      initView();
    })

    function initView() {
      vm.fontSize = settingsService.getFontSize();
    }
  }
})();
