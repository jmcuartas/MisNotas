angular
    .module('settingsModule', ['pascalprecht.translate'])
    .config(function($translateProvider){
        $translateProvider.useStaticFilesLoader({
            'prefix': 'js/app/common/languages/locale-',
            'suffix': '.json'
            })

        $translateProvider.preferredLanguage('en');

    })
    .controller('settingsController', settingsController);

    function settingsController($translate){
        var vm = this;

        vm.showSelectedValue = showSelectedValue;
                
        function showSelectedValue(language){
            $translate.use(language);
        }

    }

