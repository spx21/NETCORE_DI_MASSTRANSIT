(function (module) {
    'use strict';
    module.factory('$security_service', ['$http', function ($http) {
        var login = function (data) {
            return $http.post('/api/security/login', data);
        };

        return {
            login: login
        };
    }]); 
})(angular.module('ProjectTest'));
