describe('form', function () {
    "use strict";

    browser.ignoreSynchronization = true;

    it('should generate valid overlay summary', function () {
        browser.get('#/form')
            .then(function () {
                browser.wait(function () {
                    return element(by.id('shoppingList')).all(by.css('tr')).count()
                        .then(function (number) {
                            return protractor.promise.when(number === 5);
                        });
                }, 10000);

                expect(
                    element(by.id('shoppingList')).all(by.css('tr')).map(function (item) {
                        return item.getText();
                    })).toEqual([
                        'Description Price',
                        'Item 1 $75.00',
                        'Item 2 $25.00',
                        'Delivery $0.00',
                        'Total $100.00'
                    ]
                );
            });
    });
});