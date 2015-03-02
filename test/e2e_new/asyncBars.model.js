module.exports = (function () {
  "use strict";

  var model = {};

  model.barById = function(barId) {
    return element(by.id(barId));
  };

  model.test = function() {};

  return model;
})();
