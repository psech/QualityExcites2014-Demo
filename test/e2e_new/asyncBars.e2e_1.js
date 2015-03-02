describe('async bars', function () {
    "use strict";
    
    var model = require('./asyncBars.model');

    beforeEach(function () {
        browser.get('#/asyncBars');
    });

    it('should contain bar with id bar_6', function () {
        browser.wait(function () {
            return model.barById('bar_6').isPresent();
        }, 10000)
        .then(function() {
            expect(model.barById('bar_6').isPresent()).toBeTruthy();
        });
    });
});
