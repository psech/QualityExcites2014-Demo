module.exports = {
    getBarById: function (barId) {
        "use strict";
        browser.wait(function () {
            return element(by.id(barId)).isPresent();
        });
        return element(by.id(barId));
    }
}