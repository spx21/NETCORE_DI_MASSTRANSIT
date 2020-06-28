(function () {
    /***
    GLobal Directives
    ***/
    angular.module('ProjectTest')
        .directive('kendoNumeric', function () {
            return {
                restrict: "EA",
                scope: {
                    settings: '='
                },
                link: function (scope, element, attrs) {
                    $(element).kendoNumericTextBox();
                }
            };
        });


    angular.module('ProjectTest')
        .directive('partnerTypeDropdown', function () {
            return {
                restrict: "EA",
                scope: {
                    settings: '='
                },
                link: function (scope, element, attrs) {
                    $(element).kendoDropDownList({
                        dataSource: [{ id: 1, name: "BackOffice" }, { id: 2, name: "Client" }, {id: 3, name: "Payer"}],
                        dataTextField: "name",
                        filter: "contains",
                        minLength: 2,
                        dataValueField: "id",
                        optionLabel: "-- Please Select --",
                        change: function (e) {
                        }
                    });
                }
            };
        });

    angular.module('ProjectTest')
        .directive('countryIsoDropdown', function () {
            return {
                restrict: "EA",
                scope: {
                    settings: '='
                },
                link: function (scope, element, attrs) {
                    $(element).kendoDropDownList({
                        dataSource: {
                            type: "aspnetmvc-ajax",
                            transport: {
                                read: {
                                    url: "/Country/GetAllCountries",                   
                                    type: "GET"
                                }
                            },
                            serverFiltering: false,
                            serverSorting: false,
                            schema: {
                                data: "Data",
                                total: "Total"
                            },
                            sort: [{
                                field: "Name",
                                dir: "asc"
                            }],
                        },
                        dataTextField: "Name",
                        filter: "contains",
                        minLength: 2,
                        dataValueField: "ISOCode2",
                        optionLabel: "-- Please Select --",
                        change: function (e) {
                        }
                    });

                }
            };
        });

    angular.module('ProjectTest')
    .directive('partnerDropdown', function () {
        return {
            link: function (scope, element, attrs) {
                $(element).kendoDropDownList({
                    dataSource: {
                        type: "aspnetmvc-ajax",
                        transport: {
                            read: {
                                url: "/Partner/GetAll",
                                type: "GET"
                            }
                        },
                        serverFiltering: false,
                        serverSorting: false,
                        sort: [{
                            field: "Name",
                            dir: "asc"
                        }],
                    },
                    dataTextField: "Name",
                    filter: "contains",
                    minLength: 2,
                    dataValueField: "ID",
                    optionLabel: "-- Please Select --",
                    change: function (e) {
                    }
                });

            }
        };
    });

    angular.module('ProjectTest')
        .directive('currencyDropdown', function () {
            return {
                link: function (scope, element, attrs) {
                    $(element).kendoDropDownList({
                        dataSource: {
                            type: "aspnetmvc-ajax",
                            transport: {
                                read: {
                                    url: "/Currency/GetAll",
                                    type: "GET"
                                }
                            },
                            serverFiltering: false,
                            serverSorting: false,
                            sort: [{
                                field: "Name",
                                dir: "asc"
                            }],
                        },
                        dataTextField: "Name",
                        filter: "contains",
                        minLength: 2,
                        dataValueField: "IsoCode",
                        optionLabel: "-- Please Select --",
                        change: function (e) {
                        }
                    });

                }
            };
        });

}());


