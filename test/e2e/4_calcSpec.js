describe('calc', function () {
    "use strict";

    beforeEach(function () {
        browser.get('#/calc');
    });

    uiModel.common.using('multiplication table',
        uiModel.calcView.multiplicationTable(),
        function (factor1, factor2) {
            it('should calculate multiplication', function () {
                uiModel.calcCtrl.pressButton('btn_' + factor1).then(function () {
                    return uiModel.calcCtrl.pressButton(uiModel.calcView.buttons.multi);
                }).then(function () {
                    return uiModel.calcCtrl.pressButton('btn_' + factor2);
                }).then(function () {
                    expect(uiModel.calcView.getElementByModel('result')
                        .getAttribute('value')).toEqual(factor1 + '*' + factor2);
                    return uiModel.calcCtrl.pressButton(uiModel.calcView.buttons.equal);
                }).then(function () {
                    expect(uiModel.calcView.getElementByModel('result')
                        .getAttribute('value')).toEqual((factor1 * factor2).toString());
                });
            });
        });

    it('should calculate equation', function () {
        uiModel.calcCtrl.pressButton(uiModel.calcView.buttons.no2).then(function () {
            return uiModel.calcCtrl.pressButton(uiModel.calcView.buttons.plus);
        }).then(function () {
            return uiModel.calcCtrl.pressButton(uiModel.calcView.buttons.no3);
        }).then(function () {
            return uiModel.calcCtrl.pressButton(uiModel.calcView.buttons.multi);
        }).then(function () {
            return uiModel.calcCtrl.pressButton(uiModel.calcView.buttons.no4);
        }).then(function () {
            expect(uiModel.calcView.getElementByModel('result').getAttribute('value'))
                .toEqual('2+3*4');
            return uiModel.calcCtrl.pressButton(uiModel.calcView.buttons.equal);
        }).then(function () {
            expect(uiModel.calcView.getElementByModel('result').getAttribute('value'))
                .toEqual('14');
        });
    });
});