describe('filter', function () {
    "use strict";

    beforeEach(function () {
        browser.get('#/filter');
    });

    it('should present proper number of elements', function () {
        expect(uiModel.filterCtrl.getUserCount()).toEqual(6);

        uiModel.filterCtrl.filter('c').then(function () {
            expect(uiModel.filterCtrl.getUserCount()).toEqual(4);
            return uiModel.filterCtrl.filter('a');
        }).then(function () {
            expect(uiModel.filterCtrl.getUserCount()).toEqual(2);
            return uiModel.filterCtrl.filter('mi');
        }).then(function () {
            expect(uiModel.filterCtrl.getUserCount()).toEqual(1);
            return uiModel.filterCtrl.filter('s');
        }).then(function () {
            expect(uiModel.filterCtrl.getUserCount()).toEqual(0);
        });
    });

    it('should present proper elements', function () {
        expect(uiModel.filterCtrl.getUserArray()).toEqual(uiModel.filterView.usersAll);
        uiModel.filterCtrl.filter('c').then(function () {
            expect(uiModel.filterCtrl.getUserArray()).toEqual([
                'Camila Gilson',
                'Chloe Creighton',
                'Claire Campbell',
                'Charlotte Gilson'
            ]);
            return uiModel.filterCtrl.filter('a');
        }).then(function () {
            expect(uiModel.filterCtrl.getUserArray()).toEqual([
                'Camila Gilson',
                'Claire Campbell',
            ]);
            return uiModel.filterCtrl.filter('mi');
        }).then(function () {
            expect(uiModel.filterCtrl.getUserArray()).toEqual([
                'Camila Gilson',
            ]);
            return uiModel.filterCtrl.filter('s');
        }).then(function () {
            expect(uiModel.filterCtrl.getUserArray()).toEqual([]);
        });
    });

});