(function () {
  'use strict';

  angular
    .module('app.core')
    .factory('cameraService', cameraService);

    function cameraService($cordovaCamera) {

      initSettings();

      var service = {
        getPictureB64: getPictureB64
      }

      return service;

      function initSettings() {

      }

      function getPictureB64(isB64) {
          $cordovaCamera.getPicture(this.getOptions(isB64))
            .then(storagePicture, error);
      }

      function getOptions(isB64) {
        var options = {
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: Camera.PictureSourceType.CAMERA,
        };

        if (isB64) {
          options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation:true
          };
        }

        return options;
      }
    }
})();
