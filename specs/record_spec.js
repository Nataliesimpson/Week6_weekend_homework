var assert = require('chai').assert;
var Record = require('../record.js');

describe('Record', function(){
  beforeEach(function(){
    record1 = new Record('Blur', 'Parklife', 10);
    record2 = new Record('Arcade Fire', 'Funeral', 8);
    record3 = new Record('Prodigy', 'The Fat of the Land', 5)
    record4 = new Record('Artic Monkeys', 'AM', 12)
  })

  it('Should have an artist name', function(){
    assert.equal('Blur', record1.artist)
  })

  it('Should have a record title', function(){
    assert.equal('AM', record4.title)
  })

  it('Should have a record price', function(){
    assert.equal(8, record2.price)
  })





})