var assert = require('chai').assert;
var Record = require('../record.js');
var RecordStore = require('../record_store.js');

describe('Record Store', function(){
  beforeEach(function(){
    recordStore1 = new RecordStore('VoxBox', 'Edinburgh');
    recordStore2 = new RecordStore('Love Music', 'Glasgow');
  })

  it('Should have a record store name', function(){
    assert.equal('VoxBox', recordStore1.name)
  })

  it('Should have a record store location', function(){
    assert.equal('Glasgow', recordStore2.city)
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



})