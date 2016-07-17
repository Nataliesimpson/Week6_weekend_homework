var assert = require('chai').assert;
var Customer = require('../customer.js');
var Record = require('../record.js');

describe('Customer', function(){
  beforeEach(function(){
    customer1 = new Customer('Frank', 50);
    customer2 = new Customer('Nat', 20);

    record1 = new Record('Blur', 'Parklife', 10);
    record2 = new Record('Arcade Fire', 'Funeral', 8);
    record3 = new Record('The Doves', 'There goes the fear', 25)
  })
  
  it('Should have a name', function(){
    assert.equal('Frank', customer1.name)
  })

  it('Should have a budget', function(){
    assert.equal(20, customer2.budget)
  })

  it('Should be able to buy a record in budget', function(){
    customer1.buyRecord(record1);
    customer1.buyRecord(record2);
    assert.equal(2, customer1.collection.length)
  })

  it('Should not buy a record if out of budget', function(){
    customer2.buyRecord(record3);
    assert.equal(0, customer2.collection.length)
  })

  it('Should update customer budget when record bought', function(){
    customer2.buyRecord(record1);
    assert.equal(10, customer2.budget)
  })

  it('Should be able to sell a record', function(){
    customer1.buyRecord(record1);
    customer1.buyRecord(record2);
    customer1.sellRecord(record1);
    assert.equal(1, customer1.collection.length)
  })

  it('Should update customer budget when record sold', function(){
    customer2.sellRecord(record1);
    assert.equal(30, customer2.budget)
  })









})  