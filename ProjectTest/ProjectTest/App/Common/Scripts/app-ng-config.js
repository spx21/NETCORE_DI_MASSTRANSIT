(function (module) {
    /* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
    module.config(['$httpProvider', 'ngDialogProvider', function ($httpProvider, ngDialogProvider) {
        $httpProvider.interceptors.push(['$injector', '$q', function interceptors($injector, $q) {
            return {
                // preventing duplicate requests
                request: function request(config) {
                    var $http = $injector.get('$http');
                    var _config = angular.copy(config);
                    delete _config.headers;
                    NProgress.start();

                    var requests = _.filter($http.pendingRequests, function (x) { return x.url == _config.url; });
                    var enableDiagnostics = localStorage.getItem("EnableTimeDiagnostics");
                    if (enableDiagnostics == "true") {
                        config.startTime = new Date();
                    }
                    if (requests.length > 1) {
                        var count = 0;
                        angular.forEach($http.pendingRequests, function (request) {
                            //if (request.cancel && request.timeout) {
                            if (request.url == _config.url) {
                                count++;
                                if (count < requests.length && request.cancel) {
                                    request.cancel.resolve();
                                    console.log("Cancel:" + request.url);
                                }
                            }
                            //}
                        });
                    }

                    var cancel = $q.defer();
                    config.timeout = cancel.promise;
                    config.cancel = cancel;
                    return config;
                },
                response: function (response) {
                    // do something on success
                    var $http = $injector.get('$http');
                    var requests = $http.pendingRequests;

                    if (requests.length < 1) {
                        NProgress.done();
                    }

                    var enableDiagnostics = localStorage.getItem("EnableTimeDiagnostics");
                    if (enableDiagnostics == "true" && response.config.startTime) {
                        date2 = new Date();
                        // get total seconds between two dates
                        var seconds = Math.abs(date2 - new Date(response.config.startTime)) / 1000;
                        if (toastr) {
                            var str = "URL: " + response.config.url + "<br/> Method:" + response.config.method + "<br/> Seconds: " + seconds;
                            toastr.info(str, "Diagnostic");
                        }
           
                        console.log(str);
                    }
                    return response;
                },
                responseError: function (response) {
                    console.log(response);
                    if (response.data != null) {
                        toastr.error("" + response.data.Message, "Error");
                    }
                    NProgress.done();
                    return $q.reject(response);
                }
            };
        }
        ]);

        ngDialogProvider.setDefaults({
            className: 'ngdialog-theme-plain',
            showClose: true,
            closeByEscape: true
        });
    }]);

    ///* Setup global settings */
    //module.factory('settings', ['$rootScope', function ($rootScope) {
    //    // supported languages
    //    var settings = {
    //        layout: {
    //            pageSidebarClosed: false, // sidebar menu state
    //            pageContentWhite: true, // set page content layout
    //            pageBodySolid: false, // solid body color state
    //            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
    //        },
    //        assetsPath: 'Content/images',
    //        globalPath: 'Content/images',
    //        layoutPath: 'Content/images',
    //    };

    //    $rootScope.settings = settings;

    //    return settings;
    //}]);


    ///* Setup App Main Controller */
    //module.controller('AppController', ['$scope', '$rootScope', '$timeout', '$state', function ($scope, $rootScope, $timeout, $state) {
    //    $scope.$on('$viewContentLoaded', function () {
    //        if ($scope.isDashboard == null)
    //            $scope.isDashboard = true;
    //    });
    //    $scope.ready = true;

    //    $rootScope.$on('$stateChangeSuccess', function (e, toState, toParams, fromState, fromParams, error) {
    //        $scope.isDashboard = toState.name == "home";
    //    });

    //    $scope.$on('onchangedashboard', function (event, data) {
    //        $scope.isDashboard = true;
    //    });

    //    $scope.$on('onchangenotdashboard', function (event, data) {
    //        $scope.isDashboard = false;
    //    });

    //    //$scope.isActive = function (name) {
    //    //    return $state.current.name == name; 
    //    //}
    //}]);

    ///***
    //Layout Partials.
    //By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial
    //initialization can be disabled and Layout.init() should be called on page load complete as explained above.
    //***/

    ///* Setup Layout Part - Header */
    //module.controller('HeaderController', ['$scope', '$http', function ($scope, $http) {
    //    $scope.$on('$includeContentLoaded', function () {
    //        Layout.initHeader(); // init header
    //    });
    //    $scope.ready = true;
    //}]);

    ///* Setup Layout Part - Sidebar */
    //module.controller('SidebarController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    //    $scope.$on('$includeContentLoaded', function () {
    //        //Layout.initSidebar(); 
    //    });

    //    $scope.ready = true;
    //}]);

    ///* Setup Layout Part - Footer */
    //module.controller('FooterController', ['$scope', function ($scope) {
    //    $scope.$on('$includeContentLoaded', function () {
    //        Layout.initFooter(); // init footer
    //    });
    //    $scope.ready = true;
    //}]);

    ///* Init global settings and run the app */
    //module.run(["$rootScope", "settings", "$state", function ($rootScope, settings, $state) {
    //    $rootScope.$state = $state; // state to be accessed from view
    //    $rootScope.$settings = settings; // state to be accessed from view
    //    angular.element('#mainPageSpinner').addClass("hide");
    //    $state.go('home');
    //    $rootScope.ready = true;
    //}]);
}(angular.module('ProjectTest')));