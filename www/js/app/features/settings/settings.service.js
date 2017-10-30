(function () {
  'use strict';

  angular
    .module('app.settings')
    .factory('settingsService', settingsService);

  function settingsService($localStorage) {

    initSettings();

    var service = {
        get: get,
        create: create,
        update: update,
      };

    return service;

    function initSettings() {
      if (angular.isUndefined($localStorage.settings)) {
        $localStorage.settings = { id: 'UserConf', lang: '', fontS: '' };
      }
    }

    function get() {
      if ($localStorage.settings.length === 0) {
        var setting = { id: 'UserConf', lang: '', fontS: '' };
        create(setting);
        return setting;
      }

      return $localStorage.settings[0];
    }

    function create(setting) {
      if ($localStorage.settings.length === 0) {
        $localStorage.settings.push(setting);
      }
    }

    function update(setting) {
      $localStorage.settings = $localStorage.settings.map(function (settingToUpdate) {
        if (setting.id === settingToUpdate.id) {
          return setting;
        }

        return settingToUpdate;
      });
    }
  }
})();
