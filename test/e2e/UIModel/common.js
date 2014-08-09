module.exports = {
    /**
     * Overlaps test and runs in a loop
     * @param name - name of data collection
     * @param values - array of data
     * @param func - callback function
     */
    using: function (name, values, func) {
        "use strict";
        var i;
        for (i = 0; i < values.length; i++) {
            if (!Array.isArray(values[i])) {
                values[i] = [values[i]];
            }
            func.apply(null, values[i]);
            jasmine.currentEnv_.currentSpec.description += ' (with "' + name +
                '" using ' + values[i].join(', ') + ')';
        }
    },

    /**  Generic function that wraps up waiting then getting an element
     *   @param locator - The locator strategy function i.e. "by.id"
     *   @param locatorArg - The argument to pass to the locator
     *   @param searchFunction - The function used to search for elements.
     *   i.e. element, element.all, findElement.
     *   @param timeout - (Optional. Default "5000")
     *   @returns {function}
     */
    waitGetElement: function (locator, locatorArg, searchFunction, timeout) {
        "use strict";
        // Default timeout
        timeout = (typeof timeout === "undefined") ? 10000 : timeout;

        // Default searchFunction
        searchFunction = (typeof searchFunction === "undefined") ?
            element : searchFunction;

        browser.wait(function () {
            return browser.isElementPresent(locator(locatorArg));
        }, timeout);

        console.log('>> searchFunction:', searchFunction);

        return searchFunction(locator(locatorArg));
    },

    /**  Generic function that wraps up waiting then getting an element
     *   using shortcut $
     *   @param cssSelector - The argument to pass to the search function
     *   @param searchFunction - The function used to search for elements.
     *   i.e. $ or elementFinder.$ or element or elementFinder.element
     *   - (Optional. Default element)
     *   @param containsText - (Optional)
     *   @param timeout - (Optional. Default "10000")
     *   @returns {function}
     */
    waitGetElementByCss: function (
        cssSelector, searchFunction, containsText, timeout) {
        "use strict";
        // Default timeout
        timeout = (typeof timeout === "undefined") ? 10000 : timeout;

        // Default searchFunction
        if (typeof searchFunction === "undefined") {
            searchFunction = element;
        }
        // Set default text
        if (typeof containsText === "undefined") {
            containsText = '';
        }

        browser.wait(function () {
            return browser.isElementPresent(
                by.cssContainingText(cssSelector, containsText));
        }, timeout);

        return searchFunction(
            by.cssContainingText(cssSelector, containsText));
    }
};