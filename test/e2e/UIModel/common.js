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
    }
};