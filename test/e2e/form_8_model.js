describe('form', function () {
    "use strict";

    browser.ignoreSynchronization = true;

    it('should generate valid overlay summary', function () {
        browser.get('#/form').then(function () {

        // Delivery section
            return uiModel.formCtrl.waitAndClickByCss('button', 'div[id="delivery"]');
        }).then(function () {
            return uiModel.formCtrl.waitAndClickByCssText('li', 'Courier', 'div[id="delivery"]');
        }).then(function () {
            return uiModel.formCtrl.waitAndClickByCss('input[id="radioFedEx"]', 'div[id="deliveryOptions"]');
        }).then(function () {

        // Billing section
            return uiModel.formCtrl.waitAndClickByCss('button', 'div[id="billing"]');
        }).then(function () {
            return uiModel.formCtrl.waitAndClickByCssText('li', 'Credit card', 'div[id="billing"]');
        }).then(function () {
            return uiModel.formCtrl.waitAndClickByCss('input[id="billingMasterCard"]', 'div[id="billingOptions"]');
        }).then(function () {

        // Submit form
            return uiModel.formCtrl.waitAndClickByCss('input[type="submit"]', 'form');
        }).then(function () {
            expect(uiModel.formCtrl.getOverlayTable()).toEqual([
                { index: 0, text: 'Delivery method Courier with FedEx' },
                { index: 1, text: 'Billing method Credit card with MasterCard' },
                { index: 2, text: 'Total price $170.00' }
            ]);
        });
    });
});