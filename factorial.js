module.exports = {
  getFactorial: function(number) {
    if (number < 2) {return 1;}
    var factorial = 1;

    for (var i = 1; i <= number; i++) {
      factorial *= i;
    }

    return factorial;
  }
}