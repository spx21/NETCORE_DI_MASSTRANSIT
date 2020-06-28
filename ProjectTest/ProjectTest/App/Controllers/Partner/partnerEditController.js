(function (module) {
    'use strict';

    module.controller('partnerEditController',
        ['$rootScope', '$scope', '$stateParams', '$timeout', 'partnerService', 'toaster', '$state','$http',
            function ($rootScope, $scope, $stateParams, $timeout, partnerService, toaster, $state, $http) {

                var vm = this;

                $scope.PartnerTypes = [{ id: "1", name: "Back Office" }, { id: "2", name: "Client" }, { id: "3", name: "Payer" }];

                $http.get('/Country/GetAllCountries').then(function (response) {
                    $scope.Countries = response.data.Data;
                });

                // $scope.id = 1;
                //Need to get id from router
                $scope.init = function () {

                    $scope.id = $stateParams.id;
                    partnerService.get($scope.id).then(function (response) {

                        $scope.partner = response.data;
                        $scope.partner.PartnerType = $scope.partner.PartnerType.toString();

                    }, function (response) {
                        $state.go("partners");
                    });
                }();

                $scope.$watch('partner.CountryIsoCode2', function (new_) {
                    console.log('new_', new_);
                });

                $scope.submit = function () {

                    $scope.isProcessing = true;
                    $scope.id = $stateParams.id;

                    console.log('$scope.partner', $scope.partner);

                    partnerService.update($scope.id, $scope.partner).then(function (response) {
                        $scope.partner = response.data;
                        $scope.isProcessing = false;
                        toaster.pop('success', "Partner", "Successfully saved!");
                        $state.go("partners");
                    }, function (error) {
                        $scope.isProcessing = false;
                        toaster.pop('error', "Partner", "Unable to save partner");
                    });
                }

                $scope.delete = function () {
                    $scope.isProcessing = true;
                    partnerService.deletePartner($scope.id).then(function (response) {
                        $scope.partner = response.data;
                        $scope.isProcessing = false;
                        toaster.pop('success', "Partner", "Successfully deleted!");
                        $state.go("partners");
                    }, function (response) {
                        $scope.isProcessing = false;
                    });
                }
            }]);
})(angular.module('ProjectTest'));
