module.exports = {

    /**
     * Waits for webElement to be present by CSS
     * @param locator
     * @param parentLocator
     */
    waitForElementByCss: function (locator, parentLocator) {
        "use strict";
        browser.wait(function () {
            return browser.isElementPresent(element(by.css(parentLocator + ' ' + locator)));
        }, 10000);
    },

    /**
     * Perform click on webElement after waiting by CSS
     * @param locator
     * @param parentLocator
     * @returns protractor.promise.Promise
     */
    waitAndClickByCss: function (locator, parentLocator) {
        "use strict";
        this.waitForElementByCss(locator, parentLocator);
        return element(by.css(parentLocator + ' ' + locator)).click();
    },

    /**
     * Waits for webElement to be present by CSS containing text
     * @param locator
     * @param text
     * @param parentLocator
     */
    waitForElementByCssText: function (locator, text, parentLocator) {
        "use strict";
        browser.wait(function () {
            return browser.isElementPresent(element(by.cssContainingText(parentLocator + ' ' + locator, text)));
        }, 10000);
    },

    /**
     * Perform click on webElement after waiting by CSS containing text
     * @param locator
     * @param text
     * @param parentLocator
     * @returns protractor.promise.Promise
     */
    waitAndClickByCssText: function (locator, text, parentLocator) {
        "use strict";
        this.waitForElementByCssText(locator, text, parentLocator);
        return element(by.cssContainingText(parentLocator + ' ' + locator, text)).click();
    },

    getOverlayTable: function () {
        "use strict";
        return element(by.css('div[class="modal-content"]'))
            .all(by.css('tr')).map(function (elem, index) {
                return {
                    index: index,
                    text: elem.getText()
                };
            });
    }
};