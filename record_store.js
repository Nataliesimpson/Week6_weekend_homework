var _ = require('lodash');
// var Record = require('./record');

var RecordStore = function( name, city, balance ){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.stock = [];
};

RecordStore.prototype = {
  addRecord: function(record) {
    this.stock.push(record);
  }
}  

module.exports = RecordStore;