(function (){
    'use strict';

    var settings = angular.module('app.settings', []);

    settings.config(config);    
    settings.controller('settingsController', settingsController);

    /* @ngInject */
    function config($translateProvider){
        $translateProvider.useStaticFilesLoader({
            'prefix': 'js/app/common/languages/locale-',
            'suffix': '.json'
            })

        $translateProvider.preferredLanguage('es'); 

    }
            
    /* @ngInject */
    function settingsController($translate){
        var vm = this;

        vm.changeLanguage = changeLanguage;
        vm.changeLetterSize = changeLetterSize;
                
        function changeLanguage(language){
            $translate.use(language);
        }

        function changeLetterSize(size){
            vm.fontSize = "font-size-" + size;
        }
    }
})();



