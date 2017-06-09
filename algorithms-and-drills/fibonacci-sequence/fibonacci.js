function nthFibonacciIterative(num) {  
  if (num <= 1) {
    return num;
  } else {
    var fibs = [0, 1];
    for (var i = 2; i <= num; i++) {
      fibs.push(fibs[0] + fibs[1]);
      fibs = fibs.slice(1);
    }
    return fibs[1];
  }
};

function nthFibonacciRecursive(num) {
  if (num <= 1) {
    return num;
  } else {
    return nthFibonacciRecursive(num - 1) + nthFibonacciRecursive(num - 2);
  }
};