describe('form', function () {
    "use strict";

    browser.ignoreSynchronization = true;

    it('should generate valid overlay summary', function () {
        browser.get('#/form')
            .then(function () {
        // Delivery section
                console.log('>> Delivery: dropdown click');
                browser.wait(function () {
                    return browser.isElementPresent(element(by.id('delivery')).element(by.css('button')));
                }, 10000);
                return element(by.id('delivery')).element(by.css('button')).click();
            })
            .then(function () {
                console.log('>> Delivery: select Courier');
                browser.wait(function () {
                    return browser.isElementPresent(element(by.id('delivery')).element(by.cssContainingText('li', 'Courier')));
                }, 10000);
                return element(by.id('delivery')).element(by.cssContainingText('li', 'Courier')).click();
            })
            .then(function () {
                console.log('>> Delivery: select FedEx');
                browser.wait(function () {
                    return browser.isElementPresent(element(by.id('deliveryOptions')).element(by.id('radioFedEx')));
                }, 10000);
                return element(by.id('deliveryOptions')).element(by.id('radioFedEx')).click();
            })
            .then(function () {
        // Billing section
                console.log('>> Billing: dropdown click');
                browser.wait(function () {
                    return browser.isElementPresent(element(by.id('billing')).element(by.css('button')));
                }, 10000);
                return element(by.id('billing')).element(by.css('button')).click();
            })
            .then(function () {
                console.log('>> Billing: select CreditCard');
                browser.wait(function () {
                    return browser.isElementPresent(element(by.id('billing')).element(by.cssContainingText('li', 'Credit card')));
                }, 10000);
                return element(by.id('billing')).element(by.cssContainingText('li', 'Credit card')).click();
            })
            .then(function () {
                console.log('>> Billing: select MasterCard');
                browser.wait(function () {
                    return browser.isElementPresent(element(by.id('billingOptions')).element(by.id('billingMasterCard')));
                }, 10000);
                return element(by.id('billingOptions')).element(by.id('billingMasterCard')).click();
            })
            .then(function () {
        // Submit form
                console.log('>> Submit form');
                browser.wait(function () {
                    return browser.isElementPresent(element(by.css('input[type="submit"]')));
                }, 10000);
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