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
    });
