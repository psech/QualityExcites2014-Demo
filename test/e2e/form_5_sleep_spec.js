describe('form', function () {
    "use strict";

    it('should generate valid overlay summary', function () {
        browser.get('#/form')
            .then(function () {
        // Delivery section
                browser.sleep(5000);
                console.log('>> Delivery: dropdown click');
                return element(by.id('delivery')).element(by.css('button')).click();
            })
            .then(function () {
                browser.sleep(5000);
                console.log('>> Delivery: select Courier');
                return element(by.id('delivery')).element(by.cssContainingText('li', 'Courier')).click();
            })
            .then(function () {
                browser.sleep(5000);
                console.log('>> Delivery: select FedEx');
                return element(by.id('deliveryOptions')).element(by.id('radioFedEx')).click();
            })
            .then(function () {
        // Billing section
                browser.sleep(5000);
                console.log('>> Billing: dropdown click');
                return element(by.id('billing')).element(by.css('button')).click();
            })
            .then(function () {
                browser.sleep(5000);
                console.log('>> Billing: select CreditCard');
                return element(by.id('billing')).element(by.cssContainingText('li', 'Credit card')).click();
            })
            .then(function () {
                browser.sleep(5000);
                console.log('>> Billing: select MasterCard');
                return element(by.id('billingOptions')).element(by.id('billingMasterCard')).click();
            })
            .then(function () {
        // Submit form
                console.log('>> Submit form');
                return element(by.css('input[type="submit"]')).click();
            })
            .then(function () {
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
});