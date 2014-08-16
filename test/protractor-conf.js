exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'e2e/*.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8000/app/',

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare: function () {
        "use strict";
        global.uiModel = require('./e2e/UIModel/uiModel');

        require('jasmine-reporters');

        jasmine.getEnv().addReporter(
            new jasmine.JUnitXmlReporter('./test/report', true, true));

        jasmine.getEnv().addReporter(
            new jasmine.NUnitXmlReporter({
                savePath: './test/report',
                reportName: 'Quality Excites demo app'
            }));
    }
};
