(function (module) {
    'use strict';
    module.factory('$productclassification_service', ['$http','$q', function ($http, $q) {

        var getDashboardBookings = function (date, locationid) {
            var cancel = $q.defer();
            return $http.get('/api/productclassification/getdashboardbookings', { params: { date: date, location: locationid }, timeout: cancel.promise, cancel: cancel});
        };

        return {
            getDashboardBookings: getDashboardBookings
        };
    }]); 
})(angular.module('ProjectTest'));
