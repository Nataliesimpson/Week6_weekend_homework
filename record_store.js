var _ = require('lodash');
var Record = require('./record');

var RecordStore = function( name, city, balance ){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.stock = [];
};

RecordStore.prototype = {
  addRecord: function(record){
    this.stock.push(record);
  },

  addRecordBalance: function(record){
    this.balance -= record.price;
  },

  sellRecord: function(record){
    this.stock.pop(record); 
    this.balance += record.price;
  },

  listStock: function(record){
    for(var record in this.records) {
    return this.records;
    }   
  },  

  totalValue: function(){
    var total = 0;
    
    this.stock.forEach(function(record){
      total += record.price;
    }) 
    return total += this.balance;
  }  

}  


module.exports = RecordStore;