(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('guidService', guidService);

    function guidService() {

      var service = {
        getGUID: getGUID
      }
      
      return service;

      function getGUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }
    }
})();
