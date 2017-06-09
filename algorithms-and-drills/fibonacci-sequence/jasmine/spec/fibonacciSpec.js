describe("iterative nth fibonacci number", function() {
  it("calculates the 0th fibonacci number", function() {
    expect(nthFibonacciIterative(0)).toEqual(0);
  });

  it("calculates the 1st fibonacci number", function() {
    expect(nthFibonacciIterative(1)).toEqual(1);
  });

  it("calculates the 2nd fibonacci number", function() {
    expect(nthFibonacciIterative(2)).toEqual(1);
  });

  it("calculates the 3rd fibonacci number", function() {
    expect(nthFibonacciIterative(3)).toEqual(2);
  });

  it("calculates the 4th fibonacci number", function() {
    expect(nthFibonacciIterative(4)).toEqual(3);
  });

  it("calculates the 5th fibonacci number", function() {
    expect(nthFibonacciIterative(5)).toEqual(5);
  });  

  it("calculates the 17th fibonacci number", function() {
    expect(nthFibonacciIterative(17)).toEqual(1597);
  });    
});

describe("recursive nth fibonacci number", function() {
  it("calculates the 0th fibonacci number", function() {
    expect(nthFibonacciRecursive(0)).toEqual(0);
  });

  it("calculates the 1st fibonacci number", function() {
    expect(nthFibonacciRecursive(1)).toEqual(1);
  });

  it("calculates the 2nd fibonacci number", function() {
    expect(nthFibonacciRecursive(2)).toEqual(1);
  });

  it("calculates the 3rd fibonacci number", function() {
    expect(nthFibonacciRecursive(3)).toEqual(2);
  });

  it("calculates the 4th fibonacci number", function() {
    expect(nthFibonacciRecursive(4)).toEqual(3);
  });

  it("calculates the 5th fibonacci number", function() {
    expect(nthFibonacciRecursive(5)).toEqual(5);
  });  

  it("calculates the 17th fibonacci number", function() {
    expect(nthFibonacciRecursive(17)).toEqual(1597);
  });  
});