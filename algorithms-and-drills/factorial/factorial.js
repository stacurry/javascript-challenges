function factorialIterative(num) {
  if (num <= 1) {
    return 1;
  } else {
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
};

function factorialRecursive(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorialRecursive(num - 1);
  }
};