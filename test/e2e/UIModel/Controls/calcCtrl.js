module.exports = {
    pressButton: function (buttonId) {
        "use strict";
        return uiModel.calcView.getElementById(buttonId).click();
    }
};