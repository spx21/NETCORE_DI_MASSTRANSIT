(function (module) {
    'use strict';
    module.factory('$group_service', ['$http', function ($http) {

        var get = function (source) {
            return $http.get('/api/group', { params: { source: source } });
        };

        return {
            get: get

        };
    }]); 
})(angular.module('ProjectTest'));
