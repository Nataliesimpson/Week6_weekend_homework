var Record = require('./record');
var RecordStore = require('./record_store.js');

var Customer = function(name) {
  this.name = name,
  this.collection = []
}

Customer.prototype = {
  buyRecord: function(record) {
    this.collection.push(record);
  }

}  

module.exports = Customer;