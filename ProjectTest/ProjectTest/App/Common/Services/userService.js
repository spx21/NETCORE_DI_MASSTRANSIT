(function (module) {
    'use strict';
    module.factory('$user_service', ['$http', function ($http) {

        var getAll = function (data) {
            return $http.get('/api/user/filter', { params: data });
        };

        var get = function (id) {
            return $http.get('/api/user?id=' + id);
        };

        var update = function (id, object) {
            return $http.put('/api/user?id=' + id, object);
        };

        var create = function (object) {
            return $http.post('/api/user', object);
        };

        var deleteUser = function (id) {
            return $http.delete('/api/user?id=' + id);
        };

        var getActiveUsers = function (id) {
            return $http.get('/api/login/getactiveusers');
        };

        var generateRandomPassword = function (length) {
            var text = "";
            var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < length; i++) {
                text += char_list.charAt(Math.floor(Math.random() * char_list.length));
            }
            return text;
        };

        var deleteUsers = function (ids) {
            return $http.put('/api/user/delete', ids);
        };

        var getByAccessRole = function (accessRole) {
            return $http.get('/api/user?accessRole=' + accessRole);
        };

        return {
            getAll: getAll,
            get: get,
            update: update,
            create: create,
            deleteUser: deleteUser,
            getActiveUsers: getActiveUsers,
            generateRandomPassword: generateRandomPassword,
            deleteUsers: deleteUsers,
            getByAccessRole: getByAccessRole
        };
    }]);
})(angular.module('ProjectTest'));
