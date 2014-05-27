module.exports = {
    buttons: {
        "no1": 'btn_1',
        "no2": 'btn_2',
        "no3": 'btn_3',
        "no4": 'btn_4',
        "no5": 'btn_5',
        "no6": 'btn_6',
        "no7": 'btn_7',
        "no8": 'btn_8',
        "no9": 'btn_9',
        "plus": 'btn_plus',
        "multi": 'btn_multi',
        "equal": 'btn_equal'
    },

    multiplicationTable: function () {
        "use strict";
        var arr = [];
        for (var factor1 = 5; factor1 <= 6; factor1++) {
            for (var factor2 = 5; factor2 <= 7; factor2++) {
                arr.push([factor1, factor2]);
            }
        }
        return arr;
    },

    getElementById: function (elementId) {
        "use strict";
        browser.wait(function () {
            return element(by.id(elementId)).isPresent();
        });
        return element(by.id(elementId));
    },

    getElementByModel: function (modelName) {
        "use strict";
        browser.wait(function () {
            return element(by.model(modelName)).isPresent();
        });
        return element(by.model(modelName));
    }
};