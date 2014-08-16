"use strict";

/* Controllers */

angular.module('myApp.controllers', ['ui.bootstrap'])
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
                    $scope.result = eval($scope.result); // jshint ignore:line
                    break;
                default:
                    $scope.result += item;
                    break;
            }
        };
    }).controller('formCtrl', function ($scope, $http, $modal/*, $log*/) {

        // http://stackoverflow.com/questions/15688313/how-can-i-populate-a-select-dropdown-list-from-a-json-feed-with-angularjs
        var timeout = 10,
            httpTimeout = 10000;

        $scope.sellItems = [];
        $scope.deliveryMethods = [];
        $scope.billingMethods = [];

        $scope.deliveryMethod = "";
        $scope.billingMethod = "";
        $scope.deliveryTemplate = 'partials/formDelivery.html';
        $scope.billingTemplate = 'partials/formBilling.html';

        $scope.billingAll = {};
        $scope.deliveryDetails = {};
        $scope.billingDetails = {};

        $scope.deliveryPrice = 0;
        $scope.totalPrice = 0;

        $scope.deliveryShow = [false, false, false];
        $scope.billingShow = [false, false, false];

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

        function getDetails(elem) {
            $http.get('/app/data/' + elem.type + '.json', {timeout: httpTimeout})
                .success(function (response) {
                    var item = elem.name.replace(/\s+/g, '_');

                    if (elem.type === 'billing') {
                        $scope.billingAll = response;
                    }

                    // Update deliveryDetails
                    $scope[elem.type + 'Details'] = response[item];

                    // Update billingDetails
                    if ($scope.billingMethod === 'Cash') {
                        $scope.billingDetails = $scope.billingAll.Cash[
                            'Cash' + $scope.deliveryMethod.replace(/\s+/g, '_')
                            ];
                    }

                    updatePrices();
                })
                .error(function (err) {
                    console.log('>> ERROR', err);
                });
        }

        $scope.selectChange = function (elem) {
            $scope[elem.type + 'Method'] = elem.name;

            setTimeout(getDetails, timeout, elem);

            $scope[elem.type + 'Show'] = [false, false, false];
            $scope[elem.type + 'Show'][elem.id] = true;
        };

        $scope.selectDeliveryRadio = function (elem) {
            $scope.deliveryDetails.choosenIco = elem;
        };

        $scope.selectBillingRadio = function (elem) {
            $scope.billingDetails.choosenIco = elem;
        };

        $scope.submit = function (size) {

            $modal.open({
                templateUrl: 'myModalContent.html',
                controller: function ($scope, $modalInstance, $route) {

                    $scope.deliveryMethod = $scope.$parent.$$childHead.deliveryMethod;
                    $scope.deliveryChoosen = $scope.$parent.$$childHead.deliveryDetails.choosenIco;
                    $scope.billingMethod = $scope.$parent.$$childHead.billingMethod;
                    $scope.billingChoosen = $scope.$parent.$$childHead.billingDetails.choosenIco;
                    $scope.totalPrice = $scope.$parent.$$childHead.totalPrice;

                    $scope.ok = function () {
                        $modalInstance.close();
                        $route.reload();
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },
                size: size
            });
        };

        setTimeout(function () {
            $http.get('/app/data/form.json', {timeout: httpTimeout}).success(function (response) {
                $scope.sellItems = response.sellItems;
                $scope.deliveryMethods = response.deliveryMethods;
                $scope.billingMethods = response.billingMethods;
                $scope.totalPrice = getTotalPrice($scope.sellItems);
            }).error(function (err) {
                console.log('>> ERROR', err);
            });
        }, timeout);
    });
