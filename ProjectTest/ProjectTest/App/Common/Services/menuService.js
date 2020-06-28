(function (module) {
    'use strict';
    module.factory('$menu_service', ['$http', function ($http) {

        var getAll = function () {
            return $http.get('/api/menu/getAll');
        };

        var getMenuItems = function (menuID, menuItemTypeID) {
            return $http.get('/api/menuitem', { params: { menuID: menuID, menuItemTypeID: menuItemTypeID } });
        };

        var getMenuItemTypes = function () {
            return $http.get('/api/menuitemtypes');
        };

        var getMenuItemsByGroupID = function (groupIDs) {
            return $http.get('/api/menuitem', { params: { groupIDs: groupIDs}});
        };

        var getMenuItemsByUserID = function (userID) {
            return $http.get('/api/menuitem?userid=' + userID);
        };

        return {
            getAll: getAll,
            getMenuItemTypes: getMenuItemTypes,
            getMenuItems: getMenuItems,
            getMenuItemsByGroupID: getMenuItemsByGroupID,
            getMenuItemsByUserID: getMenuItemsByUserID
        };

    }]); 
})(angular.module('ProjectTest'));
