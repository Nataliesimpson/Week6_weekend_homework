var Record = require('./record');
var RecordStore = require('./record_store.js');

var Customer = function(name, budget) {
  this.name = name;
  this.budget = budget;
  this.collection = [];
}

Customer.prototype = {
  buyRecord: function(record) {
    if( this.budget >= record.price ){
    this.collection.push(record);
    this.budget -= record.price;
    }
  },

  sellRecord: function(record) {
    this.collection.pop(record);
    this.budget += record.price;
  }

}  

module.exports = Customer;