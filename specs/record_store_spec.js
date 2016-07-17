var assert = require('chai').assert;
var Record = require('../record.js');
var RecordStore = require('../record_store.js');

describe('Record Store', function(){
  beforeEach(function(){
    recordStore1 = new RecordStore('VoxBox', 'Edinburgh', 100);
    recordStore2 = new RecordStore('Love Music', 'Glasgow', 0);
  })

  it('Should have a record store name', function(){
    assert.equal('VoxBox', recordStore1.name)
  })

  it('Should have a record store location', function(){
    assert.equal('Glasgow', recordStore2.city)
  })

  it('Should have an opening balance', function(){
    assert.equal(100, recordStore1.balance)
  })

  it('Should start with no records', function(){
    assert.equal(0, recordStore1.stock.length)
  })

  it('Should add records to the store', function(){
    recordStore2.addRecord(record1);
    recordStore2.addRecord(record2);
    recordStore2.addRecord(record3);
    assert.equal(3, recordStore2.stock.length)
  })

  it('Should be able to list record stock', function(){
    recordStore1.addRecord(record1);
    recordStore1.addRecord(record2);
    recordStore1.addRecord(record3);
    recordStore1.addRecord(record4);
    recordStore1.listStock;
    assert.deepEqual( [record1, record2, record3, record4], recordStore1.stock)
  })

  

  // it('Should update balance when record sold', function() {
  //    recordStore1.addRecord(record1);

  //    recordStore1.soldRecord(record2);

  //    recordStore1.addBalance(record1);
  //    assert.equal(110, recordStore1.balance)
  //  })



})