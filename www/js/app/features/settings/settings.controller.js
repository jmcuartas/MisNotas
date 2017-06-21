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

        vm.showSelectedValue = showSelectedValue;
                
        function showSelectedValue(language){
            $translate.use(language);
        }
    }
})();



