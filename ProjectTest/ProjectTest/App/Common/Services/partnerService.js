
(function (module) {
    'use strict';

    module.factory('partnerService', ['$http', function ($http) {

        var getAll = function (user) {
            return $http.get('/Partner/GetAll');
        };

        var get = function (id) {
            return $http.get('/Partner/Get/' + id);
        };

        var update = function (id, object) {
            return $http.post('/Partner/Edit?id=' + id, object);
        }

        var create = function (object) {
            return $http.post('/Partner/Create', object);
        }

        var deletePartner = function (id) {
            return $http.post('/Partner/Delete?id=' + id);
        }

        var getFees = function (id) {
            return $http.get('/Partner/GetFees?partnerID=' + id);
        };

        var getPartnerUsers = function (id) {
            return $http.get('/Partner/GetPartnerUsers?partnerID=' + id);
        };

        return {
            getAll: getAll,
            get: get,
            update: update,
            create: create,
            getFees: getFees,
            deletePartner: deletePartner,
            getPartnerUsers: getPartnerUsers
        }
    }]);
})(angular.module('ProjectTest'));
