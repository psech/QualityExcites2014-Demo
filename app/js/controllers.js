'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('filterCtrl', function ($scope) {
        $scope.users = [
            { firstName: "Camila", lastName: "Gilson" },
            { firstName: "Chloe", lastName: "Creighton" },
            { firstName: "Zoey", lastName: "White" },
            { firstName: "Claire", lastName: "Campbell" },
            { firstName: "Kylie", lastName: "Smith" },
            { firstName: "Charlotte", lastName: "Gilson" }
        ];
    })
    .controller('asyncBarsCtrl', function ($scope, $interval) {
        var barsArr = [
            { id: "bar_1", type: "success" },
            { id: "bar_2", type: "info" },
            { id: "bar_3", type: "warning" },
            { id: "bar_4", type: "danger" },
            { id: "bar_5", type: "success" },
            { id: "bar_6", type: "info" },
            { id: "bar_7", type: "warning" },
            { id: "bar_8", type: "danger" }
        ];

        $scope.bars = [];

        $interval(function () {
            $scope.bars.push(barsArr.shift());
        }, 1500, barsArr.length);
    })
    .controller('calcCtrl', function ($scope) {
        $scope.buttons = [
            { id: "btn_7", caption: "7" },
            { id: "btn_8", caption: "8" },
            { id: "btn_9", caption: "9" },
            { id: "btn_multi", caption: "*" },

            { id: "btn_4", caption: "4" },
            { id: "btn_5", caption: "5" },
            { id: "btn_6", caption: "6" },
            { id: "btn_plus", caption: "+" },

            { id: "btn_1", caption: "1" },
            { id: "btn_2", caption: "2" },
            { id: "btn_3", caption: "3" },
            { id: "btn_equal", caption: "=" }
        ];

        $scope.result = '';
        $scope.calculate = function (item) {
            switch (item) {
                case '=':
                    $scope.result = eval($scope.result);
                    break;
                default:
                    $scope.result += item;
                    break;
            }
        };
    }).controller('formCtrl', function ($scope, $http) {
        // http://stackoverflow.com/questions/15688313/how-can-i-populate-a-select-dropdown-list-from-a-json-feed-with-angularjs
        var timeout = 0;

        $scope.sellItems = [];
        $scope.deliveryMethods = [];
        $scope.billingMethods = [];

        $scope.deliveryMethod = "";
        $scope.billingMethod = "";

        $scope.deliveryDetails = {};
        $scope.billingDetails = {};

        $scope.deliveryPrice = 0;
        $scope.totalPrice = 0;

        $scope.showDelivery = [false, false, false];
        $scope.showBilling = [false, false, false];

        function updatePrices () {
            var deliveryPrice = $scope.deliveryDetails.deliveryPrice || 0,
                billingPrice = $scope.billingDetails.deliveryPrice || 0;

            $scope.deliveryPrice = deliveryPrice + billingPrice;
            $scope.totalPrice = getTotalPrice($scope.sellItems) + $scope.deliveryPrice;
        }

        function getTotalPrice (sellItems) {
            var totalPrice = 0;
            sellItems.forEach(function (sellItem) {
                totalPrice += sellItem.price;
            });
            return totalPrice;
        }

        function getDeliveryDetails(type, elem) {
            $http.get('/app/data/' + type + '.json')
                .success(function (response) {
                    var item = elem.name.replace(/\s+/g, '_');
                    $scope.deliveryDetails = response[item];
                    updatePrices();
                })
                .error(function (err) {
                    console.log('>> ERROR', err);
                });
        }

        function getBillingDetails(type, elem) {
            $http.get('/app/data/' + type + '.json')
                .success(function (response) {
                    if (type && elem) {
                        var item = elem.name.replace(/\s+/g, '_');
                        if (elem.name === 'Cash') {
                            $scope.billingDetails = response[item][$scope.deliveryMethod.replace(/\s+/g, '_')];
                        } else {
                            $scope.billingDetails = response[item];
                        }
                        updatePrices();
                    }

                })
                .error(function (err) {
                    console.log('>> ERROR', err);
                });
        }

        $scope.selectChange = function (type, elem) {
            switch (type) {
                case 'delivery':
                    $scope.deliveryMethod = elem.name;
                    $scope.showDelivery = [false, false, false];
                    $scope.showDelivery[elem.id] = true;
                    setTimeout(getDeliveryDetails, timeout, type, elem);
                    break;
                case 'billing':
                    $scope.billingMethod = elem.name;
                    $scope.showBilling = [false, false, false];
                    $scope.showBilling[elem.id] = true;
                    setTimeout(getBillingDetails, timeout, type, elem);
                    break;
            }
        };

        setTimeout(function () {
            $http.get('/app/data/form.json').success(function (response) {
                $scope.testAccounts = response.testAccounts;
                $scope.sellItems = response.sellItems;
                $scope.deliveryMethods = response.deliveryMethods;
                $scope.billingMethods = response.billingMethods;
                $scope.totalPrice = getTotalPrice($scope.sellItems);
            }).error(function (err) {
                console.log('>> ERROR', err);
            });
        }, timeout);
    });
