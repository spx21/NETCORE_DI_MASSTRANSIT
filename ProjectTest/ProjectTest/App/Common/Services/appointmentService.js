(function (module) {
    'use strict';
    module.factory('$appointment_service', ['$http', '$q', function ($http, $q) {

        var getGetRegionPerformance = function (date, locationid) {
            var cancel = $q.defer();
            return $http.get('/api/appointment/getregionperformance', { params: { date: date, location: locationid }, timeout: cancel.promise, cancel: cancel});
        };

        var getDashboardRevenue = function (fromDate, toDate, locationid) {
            var cancel = $q.defer();
            return $http.get('/api/appointment/getdashboardrevenue', { params: { fromDate: fromDate, toDate: toDate, location: locationid }, timeout: cancel.promise, cancel: cancel});
        };

        return {
            getGetRegionPerformance: getGetRegionPerformance,
            getDashboardRevenue: getDashboardRevenue
        };
    }]); 
})(angular.module('ProjectTest'));
