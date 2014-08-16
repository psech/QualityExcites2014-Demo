exports.config = {
//    allScriptsTimeout: 11000,
    allScriptsTimeout: 100,

    seleniumAddress: 'http://localhost:4444/wd/hub',

    multiCapabilities: [
//        { 'browserName': 'firefox' },
        { 'browserName': 'chrome' }
//        { 'browserName': 'internet explorer' },
//        { 'browserName': 'safari' }
    ],

    specs: [
        'e2e/*.js'
//        'e2e/1_generalSpec.js'
//        'e2e/2_filterSpec.js'
//        'e2e/3_asyncBarsSpec.js'
//        'e2e/4_calcSpec.js'
//        'e2e/form_1_noFlow_spec.js',
//        'e2e/form_2_async_spec.js',
//        'e2e/form_3_promise_spec.js',
//        'e2e/form_4_pattern_spec.js',
//        'e2e/form_5_sleep_spec.js',
//        'e2e/form_6_wait_spec.js',
//        'e2e/form_7_waitCustom_spec.js',
//        'e2e/form_8_model.js'
    ],

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
