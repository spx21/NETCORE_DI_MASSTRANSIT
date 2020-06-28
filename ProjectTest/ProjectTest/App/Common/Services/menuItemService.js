(function (module) {
    'use strict';
    module.factory('$menuitem_service', ['$http', function ($http) {

        var getAll = function () {
            return $http.get('/api/menuItem/getall');
        };

        var get = function (id) {
            return $http.get('/api/menuItem/getbyid/' + id);
        };

        var update = function (id, object) {
            return $http.put('/api/menuItem/Update/' + id, object);
        }

        var create = function (object) {
            return $http.post('/api/menuItem/Create', object);
        }

        var deleteUser = function (id) {
            return $http.post('/api/menuItem/Delete/' + id);
        }

        return {
            getAll: getAll,
            get: get,
            update: update,
            create: create,
            deleteUser: deleteUser
        }
    }]); 
})(angular.module('ProjectTest'));
