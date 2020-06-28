(function (module) {
    /* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
    module.constant('ProjectTestConstant', {
        UserStatuses: [
            {
                Text: "Active",
                Value : 1
            },
            {
                Text: "Inactive",
                Value: 2
            },
            {
                Text: "Draft",
                Value: 3
            }
        ],
        AccessRole: {
            None: 0,
            Admin: 1,
            BusinessAdmin: 2,
            OperationAdmin: 3,
            Staff: 4,
            Customer: 5
        },
        UserStatus: {
            None : 0,
            Active : 1,
            Inactive : 2,
            Draft : 3,
            Blocked : 4,
            OnHold : 5
        }
    });
}(angular.module('ProjectTest')));