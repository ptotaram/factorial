var test = require('unit.js');
var factorial = require('../factorial');

describe('Factorial', function () {
  describe('getFactorial', function () {
    it('should return 1', function (done) {
      test.value(factorial.getFactorial(0)).is(1);
      done();
    });

    it('should return 1', function (done) {
      test.value(factorial.getFactorial(1)).is(1);
      done();
    });

    it('should return 2', function (done) {
      test.value(factorial.getFactorial(2)).is(2);
      done();
    });

    it('Should return 6', function (done) {
      test.value(factorial.getFactorial(3)).is(6);
      done();
    });

    it('Should return 12696403353658275925965100847566516959580321051449436762275840000000000000', function (done) {
      test.value(factorial.getFactorial(55)).is(12696403353658275925965100847566516959580321051449436762275840000000000000);
      done();
    });
  });
});