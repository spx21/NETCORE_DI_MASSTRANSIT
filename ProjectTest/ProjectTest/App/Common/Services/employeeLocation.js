(function (module) {
    'use strict';
    module.factory('$employeelocation_service', ['$http', function ($http) {

        var getAll = function (data) {
            return $http.get('/api/employeelocation', { params: data, starttime: new Date()});
        };

        var get = function (id) {
            return $http.get('/api/employeelocation?id=' + id);
        };

        var update = function (id, object) {
            return $http.put('/api/employeelocation/Update?id=' + id, object);
        };

        var create = function (object) {
            return $http.post('/api/employeelocation', object);
        };


        var remove = function (id) {
            return $http.delete('/api/employeelocation/Delete?id=' + id);
        };



        return {
            getAll: getAll,
            get: get,
            update: update,
            create: create,
            remove: remove
        };

    }]); 
})(angular.module('ProjectTest'));
