var _ = require("underscore");

function Dict() {
  this.datastore = {};
}

Dict.prototype = {
  put: function(key, value) {
    this.datastore[key] = value;
  },

  get: function(key) {
    return this.datastore[key];
  },

  del: function(key) {
    var value = this.datastore[key];
    delete this.datastore[key];
    return value;
  },

  size: function() {
    return _.size(this.datastore);
  }
};

module.exports = Dict;
