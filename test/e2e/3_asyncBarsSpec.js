describe('async bars', function () {
    "use strict";

    beforeEach(function () {
        browser.get('#/asyncBars');
    });

    it('should contain bar with id bar_6', function () {
        expect(uiModel.asyncBarsView.getBarById('bar_6').isPresent()).toBeTruthy();
    });

});