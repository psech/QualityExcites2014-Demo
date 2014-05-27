exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'e2e/*.js'
//        'e2e/1_generalSpec.js'
//        'e2e/2_filterSpec.js'
//        'e2e/3_asyncBarsSpec.js'
//        'e2e/4_calcSpec.js'
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
