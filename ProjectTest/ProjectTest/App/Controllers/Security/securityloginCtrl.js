(function (module) {
    'use strict';
    module.controller('securityLoginCtrl', ['$rootScope', '$scope', '$timeout', '$security_service', function ($rootScope, $scope, $timeout, $security_service) {
        $scope.user = {};
        $scope.isProcessing = false;
        $scope.isAcceptedTerms = false;
        $scope.submit = function () {
            $scope.errorMessage = null;
            if ($scope.loginForm.$valid) {
                $scope.isProcessing = true;
                var date1 = new Date();
                $security_service.login($scope.user)
                    .then(function (response) {
                        window.location = '/Security/ConfirmLogin';
                       // window.location =  "/"+response.data.Partner.NameUrl+'/'+response.data.Partner.PartnerType + '/dashboard';
                    }, function (error) {
                        $scope.errorMessage = error.data.Message;
                        $scope.isProcessing = false;
                    });
            }
        }

        $scope.confirmLogin = function () {

            $scope.errorMessage = null;
            if ($scope.loginForm.$valid && $scope.isAcceptedTerms) {
                $scope.isProcessing = true;
                var date1 = new Date();
                $security_service.login($scope.user)
                    .then(function (response) {
                        var enableDiagnostics = localStorage.getItem("EnableTimeDiagnostics");
                        if (enableDiagnostics == "true") {
                            var date2 = new Date();
                            // get total seconds between two dates
                            var seconds = Math.abs(date2 - date1) / 1000;
                            var str = "URL: " + response.config.url + "<br/> Method:" + response.config.method + "<br/> Seconds: " + seconds;
                            console.log(str);
                        }

                        window.location = "/" + response.data.Partner.NameUrl + '/' + response.data.Partner.PartnerType + '/dashboard';

                        //window.location = "/" + response.data.Partner.NameUrl + '/' +"ConfirmLogin"
                    }, function (error) {
                        $scope.errorMessage = error.data.Message;
                        $scope.isProcessing = false;
                    });
            }
        }
    }]);
})(angular.module('ProjectTest'));