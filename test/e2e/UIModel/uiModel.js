module.exports = {

    common: require('./common'),

    // Wire up Views here
    filterView: require('./Views/filterView'),
    asyncBarsView: require('./Views/asyncBarsView'),
    calcView: require('./Views/calcView'),

    // Wire up Controls here
    filterCtrl: require('./Controls/filterCtrl'),
    calcCtrl: require('./Controls/calcCtrl')

};