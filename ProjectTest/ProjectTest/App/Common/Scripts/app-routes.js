
(function () {
    angular.module('ProjectTest').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        // Redirect any unmatched url
        $urlRouterProvider.otherwise('/');

        $stateProvider
            // HomeD:\Freelance\llp\llp-develop\ProjectTest.Portal\Areas\BackOffice\Views\Home\Home_Index.cshtml
            //.state('home', {
            //    url: '/',
            //    template: '',
            //    data: { pageTitle: 'Admin Home Template' , isDashboard: false },
            //    controllerAs: "vm",
            //    resolve: {
            //    }
            //})

            //.state('partners', {
            //    url: '/Partners',
            //    templateUrl: '../Backoffice/Partner/Index',
            //    data: { pageTitle: 'Partner List' },
            //    controller: 'partnerController',
            //    controllerAs: "vm",
            //    resolve: {
            //        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //            return $ocLazyLoad.load({
            //                name: 'ProjectTest',
            //                insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
            //                files: [
            //                    '../App/Controllers/Partner/partnerController.js',
            //                    '../App/Common/Services/PartnerService.js'
            //                ]
            //            });
            //        }]
            //    }
            //})
            //.state('partner-create', {
            //    url: '/Partner/Create',
            //    templateUrl: '../Backoffice/Partner/Create',
            //    data: { pageTitle: 'Partner List' },
            //    controller: 'partnerCreateController',
            //    controllerAs: "vm",
            //    resolve: {
            //        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //            return $ocLazyLoad.load({
            //                name: 'ProjectTest',
            //                insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
            //                files: [
            //                    '../App/Controllers/Partner/partnerCreateController.js',
            //                    '../App/Common/Services/PartnerService.js'
            //                ]
            //            });
            //        }]
            //    }
            //})
            //.state('partner-edit', {
            //    url: '/Partner/Edit/:id',
            //    templateUrl: '../Backoffice/Partner/Edit',
            //    data: { pageTitle: 'Partner Edit' },
            //    controller: 'partnerEditController',
            //    controllerAs: "vm",
            //    resolve: {
            //        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //            return $ocLazyLoad.load({
            //                name: 'ProjectTest',
            //                insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
            //                files: [
            //                    '../App/Controllers/Partner/partnerEditController.js',
            //                    '../App/Common/Services/PartnerService.js'
            //                ]
            //            });
            //        }]
            //    }
            //})

            //.state('partnerfees', {
            //    url: '/Fees',
            //    templateUrl: '../Backoffice/Fee/Index',
            //    data: { pageTitle: 'Partner List' },
            //    controller: 'partnerFeeController',
            //    controllerAs: "vm",
            //    resolve: {
            //        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //            return $ocLazyLoad.load({
            //                name: 'ProjectTest',
            //                insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
            //                files: [
            //                    '../App/Controllers/PartnerFee/partnerFeeController.js',
            //                    '../App/Common/Services/partnerFeeService.js',
            //                    '../App/Common/Services/partnerService.js'
            //                ]
            //            });
            //        }]
            //    }
            //})

            //.state('partnerfee-create', {
            //    url: '/Fee/Create',
            //    templateUrl: '../Backoffice/Fee/Create',
            //    data: { pageTitle: 'Partner Fee Create' },
            //    controller: 'partnerFeeCreateController',
            //    controllerAs: "vm",
            //    resolve: {
            //        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //            return $ocLazyLoad.load({
            //                name: 'ProjectTest',
            //                insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
            //                files: [
            //                    '../App/Controllers/PartnerFee/partnerFeeCreateController.js',
            //                    '../App/Common/Services/PartnerFeeService.js',
            //                    '../App/Common/Services/CurrencyService.js',
            //                    '../App/Common/Services/PartnerService.js'
            //                ]
            //            });
            //        }]
            //    }
            //})

            //.state('partnerfee-edit', {
            //    url: '/Fee/Edit/:id',
            //    templateUrl: '../Backoffice/Fee/Edit',
            //    data: { pageTitle: 'Partner Fee Edit' },
            //    controller: 'partnerFeeEditController',
            //    controllerAs: "vm",
            //    resolve: {
            //        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
            //            return $ocLazyLoad.load({
            //                name: 'ProjectTest',
            //                insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
            //                files: [
            //                    '../App/Controllers/PartnerFee/partnerFeeEditController.js',
            //                    '../App/Common/Services/PartnerFeeService.js',
            //                    '../App/Common/Services/CurrencyService.js',
            //                    '../App/Common/Services/PartnerService.js'
            //                ]
            //            });
            //        }]
            //    }
            //})
    }]);
}());