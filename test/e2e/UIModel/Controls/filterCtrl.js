module.exports = {
    filter: function (text) {
        "use strict";
        return uiModel.filterView.getSearch().sendKeys(text);
    },

    getUserCount: function () {
        "use strict";
        return uiModel.filterView.getElementsByRepeater().count();
    },

    getUserArray: function () {
        "use strict";
        return uiModel.filterView.getElementsByRepeater().map(function (elem) {
            return elem.getText();
        });
    }
};