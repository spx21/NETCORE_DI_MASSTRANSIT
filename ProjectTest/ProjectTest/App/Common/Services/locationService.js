(function (module) {
    'use strict';
    module.factory('$location_service', ['$http', function ($http) {

        var getAll = function () {
            return $http.get('/api/location');
        };

        var get = function (id) {
            return $http.get('/api/location?id=' + id);
        };

        var update = function (id, object) {
            return $http.put('/api/location?id=' + id, object);
        };

        var create = function (object) {
            return $http.post('/api/location', object);
        };

        var deleteUser = function (id) {
            return $http.delete('/api/location?id=' + id);
        };

        return {
            getAll: getAll,
            get: get,
            update: update,
            create: create,
            deleteUser: deleteUser
        };
    }]); 
})(angular.module('ProjectTest'));
