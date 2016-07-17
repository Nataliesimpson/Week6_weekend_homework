var assert = require('chai').assert;
var Customer = require('../customer.js');

describe('Customer', function(){
  beforeEach(function(){
    customer1 = new Customer('Frank');
    customer2 = new Customer('Nat');
  })
  
  it('Should have a name', function(){
    assert.equal('Frank', customer1.name)
  })

})  