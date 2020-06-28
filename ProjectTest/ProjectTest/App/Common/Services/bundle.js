(function (module) {
    'use strict';
    module.factory('$appointment_service', ['$http', '$q', function ($http, $q) {

        var getGetRegionPerformance = function (date, locationid) {
            var cancel = $q.defer();
            return $http.get('/api/appointment/getregionperformance', { params: { date: date, location: locationid }, timeout: cancel.promise, cancel: cancel});
        };

        var getDashboardRevenue = function (fromDate, toDate, locationid) {
            var cancel = $q.defer();
            return $http.get('/api/appointment/getdashboardrevenue', { params: { fromDate: fromDate, toDate: toDate, location: locationid }, timeout: cancel.promise, cancel: cancel});
        };

        return {
            getGetRegionPerformance: getGetRegionPerformance,
            getDashboardRevenue: getDashboardRevenue
        };
    }]); 
})(angular.module('ProjectTest'));

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

(function (module) {
    'use strict';
    module.factory('$productclassification_service', ['$http','$q', function ($http, $q) {

        var getDashboardBookings = function (date, locationid) {
            var cancel = $q.defer();
            return $http.get('/api/productclassification/getdashboardbookings', { params: { date: date, location: locationid }, timeout: cancel.promise, cancel: cancel});
        };

        return {
            getDashboardBookings: getDashboardBookings
        };
    }]); 
})(angular.module('ProjectTest'));

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