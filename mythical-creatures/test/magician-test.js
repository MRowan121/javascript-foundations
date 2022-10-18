var assert = require('chai').assert;
var Magician = require('../exercises/magician');

describe('Magician', function() {
// Oh no! It looks like there's no text in the `it` blocks! I guess you'll have to read the tests SUPER carefully to know what the test is expecting!

it('should be a function', function() {
    assert.isFunction(Magician);
    assert.instanceOf(new Magician({}), Magician);
  });

it('should have a name', function() {
    var magician1 = new Magician({ name: 'Scott' });
    var magician2 = new Magician({ name: 'Casey' });

    assert.equal(magician1.name, 'The Great Scott');
    assert.equal(magician2.name, 'The Great Casey');
  });

it('should be able to have an assistant', function() {
    var magician1 = new Magician({ name: 'Scott', assistant: true });
    var magician2 = new Magician({ name: 'Casey', assistant: false });

    assert.equal(magician1.name, 'The Great Scott');
    assert.equal(magician1.assistant, true);

    assert.equal(magician2.name, 'The Great Casey');
    assert.equal(magician2.assistant, false);
  });

it('should have a top hat as favorite accesory if name is Scott', function() {
    var magician = new Magician({ name: 'Scott' });

    assert.equal(magician.favoriteAccessory, 'top hat');
  });

it('should have a cape as favorite accesory if name is Casey', function() {
    var magician = new Magician({ name: 'Casey', clothing: 'cape' });

    assert.equal(magician.favoriteAccessory, 'cape')
  });

it('should capitalize spells and charms with a function', function() {
    var magician = new Magician({ name: 'Scott' });

    var spell = magician.performIncantation('abracadabra');
    var charm = magician.performIncantation('allakazaam')

    assert.equal(spell, 'ABRACADABRA!');
    assert.equal(charm, 'ALLAKAZAAM!');
  });

it('should perform trick', function() {
    var magician1 = new Magician({ name: 'Hannah' });
    var magician2 = new Magician({ name: 'Kayla', clothing: 'top hat' });

    var spell1 = magician1.performTrick();
    var spell2 = magician2.performTrick();

    assert.equal(spell1, 'PULL RABBIT FROM TOP HAT');
    assert.equal(spell2, 'PULL RABBIT FROM TOP HAT');
  });

it('should perform different trick if clothing is cape', function() {
    var magician = new Magician({ name: 'Leta', clothing: 'cape' });

    var spell = magician.performTrick();

    assert.equal(spell, 'PULL DOVE FROM SLEEVE');
  });

it('should establish confidence percentage at 10', function() {
    var magician = new Magician({ name: 'Leta' });

    assert.equal(magician.confidencePercentage, 10);
  });

it('should increase confidence percentage by 10 with each trick', function() {
    var magician = new Magician({ name: 'Leta' });

    magician.performTrick();
    magician.performTrick();
    magician.performTrick();

    assert.equal(magician.confidencePercentage, 40);

    magician.performTrick();

    assert.equal(magician.confidencePercentage, 50);
  });

it('should be able to saw someone in half if confidence is at 100%', function() {
    var magician = new Magician({ name: 'Scott', assistant: true });

    assert.equal(magician.performShowStopper(), 'Oh no, this trick is not ready!');

    for (var i = 0; i < 10; i++) {
      magician.performTrick();
    }

    assert.equal(magician.performShowStopper(), 'WOW! The magician totally just sawed that person in half!');
  });

it('should not be able to saw someone in half without an assistant', function() {
    var magician1 = new Magician({ name: 'Scott', assistant: false });
    var magician2 = new Magician({ name: 'Hannah', assistant: true });

    assert.equal(magician1.performShowStopper(), 'Oh no, this trick is not ready!');
    assert.equal(magician2.performShowStopper(), 'Oh no, this trick is not ready!');

    for (var i = 0; i < 10; i++) {
      magician1.performTrick();
      magician2.performTrick();
    }

    assert.equal(magician1.performShowStopper(), 'Oh no, this trick is not ready!');
    assert.equal(magician2.performShowStopper(), 'WOW! The magician totally just sawed that person in half!');
  });
});
