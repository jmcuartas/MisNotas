(function () {
  'use strict';
  var core = angular.module('app.core');
  core.run(run);
  /* @ngInject */
  function run($ionicPlatform) {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  }
})();
