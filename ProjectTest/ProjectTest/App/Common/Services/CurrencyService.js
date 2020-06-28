(function (module) {
    'use strict';

    module.factory('currencyService', ['$http', function ($http) {

        var getAll = function (user) {
            return $http.get('/Currency/GetAll');
        };

        return {
            getAll: getAll
        }
    }]);
})(angular.module('ProjectTest'));
