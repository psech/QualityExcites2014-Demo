describe('form', function () {
    "use strict";

    it('should generate valid overlay summary', function () {
        browser.get('#/form');

        // Delivery section
        element(by.id('delivery')).element(by.css('button')).click();
        element(by.id('delivery')).element(by.cssContainingText('li', 'Courier')).click();
        element(by.id('deliveryOptions')).element(by.id('radioFedEx')).click();

        // Billing section
        element(by.id('billing')).element(by.css('button')).click();
        element(by.id('billing')).element(by.cssContainingText('li', 'Credit card')).click();
        element(by.id('billingOptions')).element(by.id('billingMasterCard')).click();

        // Submit form
        element(by.css('input[type="submit"]')).click();

        var items = element(by.css('div[class="modal-content"]'))
            .all(by.css('tr')).map(function (elem, index) {
                return {
                    index: index,
                    text: elem.getText()
                };
            });

        expect(items).toEqual([
            { index: 0, text: 'Delivery method Courier with FedEx' },
            { index: 1, text: 'Billing method Credit card with MasterCard' },
            { index: 2, text: 'Total price $170.00' }
        ]);
    });
});