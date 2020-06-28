(function (module) {
    'use strict';

    module.factory('countryService', ['$http', function ($http) {

        var getAll = function (user) {
            return $http.get('/Country/GetAllCountries');
        };

        return {
            getAll: getAll
        }
    }]);
})(angular.module('ProjectTest'));
