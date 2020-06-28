(function (module) {
    'use strict';
    module.factory('$staff_service', ['$http', function ($http) {

        var getAll = function (data) {
            return $http.get('/api/user/getStaffs', { params: data });
        };

        var get = function (id) {
            return $http.get('/api/user/getbyid/' + id);
        };

        var update = function (id, object) {
            return $http.put('/api/User/UpdateStaff/' + id, object);
        };

        var create = function (object) {
            return $http.post('/api/User/CreateStaff', object);
        };

        var deleteUser = function (id) {
            return $http.delete('/api/User/Delete/' + id);
        };

        var deleteUsers = function (ids) {
            return $http.put('/api/user/delete', ids);
        };


        return {
            getAll: getAll,
            get: get,
            update: update,
            create: create,
            deleteUser: deleteUser,
            deleteUsers: deleteUsers
        };
    }]);
})(angular.module('ProjectTest'));
