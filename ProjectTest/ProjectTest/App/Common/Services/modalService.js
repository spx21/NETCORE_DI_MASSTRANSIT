(function (module) {
    'use strict';
    module.factory('$modal_service', ['$http', 'ngDialog', function ($http, ngDialog) {
        var confirm = function (scope, callback) {
            ngDialog.open({
                scope: scope,
                template: '/App/Templates/confirmation.html?v=' + Math.random().toString(),
                preCloseCallback: callback
            });
        };

        return {
            confirm: confirm
        };

    }]);
})(angular.module('ProjectTest'));
