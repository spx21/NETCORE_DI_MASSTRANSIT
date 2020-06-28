(function (module) {
    'use strict';

    module.controller('partnerCreateController',
        ['$rootScope', '$scope', '$timeout', 'partnerService', 'toaster', '$state',
            function ($rootScope, $scope, $timeout, partnerService, toaster, $state) {

        var vm = this;

        $scope.init = function () {
            $scope.partnerTypes = [
                { id: 1 , name:"BackOffice"},
                { id: 2, name: "Client" },
                { id: 3, name: "Payer" }
            ];
        }();

        $scope.submit = function () {
    
            $scope.isProcessing = true;
            partnerService.create($scope.partner).then(function (response) {
                $state.go("partners");
                toaster.pop('success', "Partner", "Successfully saved!");
                $scope.isProcessing = false;
            }, function (error) {
                $scope.isProcessing = false;    
                toaster.pop('error', "Partner", "Unable to save partner");
            });

        }
    }]);
})(angular.module('ProjectTest'));