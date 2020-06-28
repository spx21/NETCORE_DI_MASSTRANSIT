(function (module) {
    'use strict';
    module.controller('partnerController', ['$rootScope', '$scope', '$timeout','partnerService', function ($rootScope, $scope, $timeout, partnerService) {
        var vm = this;

        function init() {
            loadData();
            $("#iconTextButton").kendoButton({
                icon: "filter"
            });

            $("#kendoIconTextButton").kendoButton({
                icon: "filter-clear"
            });

            $("#iconButton").kendoButton({
                icon: "refresh"
            });
            $rootScope.$broadcast('onchangenotdashboard');
        };

        vm.gridOptions = {
            enableSorting: true,
            rowHeight: 35,
            columnDefs: [
                { name: 'Code', displayName: 'Code' },
                { name: 'Name', displayName: 'Name' },
                { name: 'Address', displayName: 'Address' },
                { name: 'City', displayName: 'City' },
                { name: 'State', displayName: 'State' },
                { name: 'CountryIsoCode2', displayName: 'Country' },
             
                {
                    name: 'action', displayName: '', width: '7%', valign: 'middle', align: 'center',
                    cellTemplate: '<div class="col-md-12 text-center"><a type="button" class="k-button" ui-sref="partner-edit({id:row.entity.ID})">Edit</a><div>'
                }
            ],
            appScopeProvider: {
                formatAction: function (row) {
                    return row.entity.status === 1 ? 'Todo' : 'Doing';
                },
            }
        };
        function loadData() {
            partnerService.getAll().then(function (response) {
                vm.partnerData = response.data;
                vm.gridOptions.data = response.data;
            });
        }
        init();
    }]);
})(angular.module('ProjectTest'));