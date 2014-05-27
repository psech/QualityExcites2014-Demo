module.exports = {
    usersAll: [
        'Camila Gilson',
        'Chloe Creighton',
        'Zoey White',
        'Claire Campbell',
        'Kylie Smith',
        'Charlotte Gilson'
    ],

    getSearch: function () {
        "use strict";
        browser.wait(function () {
            return element(by.model('query')).isPresent();
        });
        return element(by.model('query'));
    },

    getElementsByRepeater: function () {
        "use strict";
        return element.all(by.repeater('user in users'));
    }
};