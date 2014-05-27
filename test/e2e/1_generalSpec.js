'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function () {

    it('should automatically redirect to /home when location hash/fragment is empty', function () {
        browser.get('').then(function () {
            expect(browser.getLocationAbsUrl()).toMatch("/home");
        });
    });

    it('should automatically redirect to /home when location hash/gragment in incorrect', function () {
        browser.get('#/fragment').then(function () {
            expect(browser.getLocationAbsUrl()).toMatch("/home");
        });
    });

    describe('home', function () {

        beforeEach(function () {
            browser.get('#/home');
        });

        it('should render home when user navigates to /home', function () {
            expect(element.all(by.css('[ng-view] h1')).first().getText())
                .toMatch(/Quality Excites/);
        });

    });

    describe('filter', function () {

        beforeEach(function () {
            browser.get('#/filter');
        });

        it('should render filter when user navigates to /filter', function () {
            expect(element.all(by.css('[ng-view] th')).first().getText())
                .toMatch(/First name/);
        });

    });
});
