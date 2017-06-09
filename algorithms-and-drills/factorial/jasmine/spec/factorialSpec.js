describe("factorial - iterative", function() {
  it("calculates the factorial of 0", function() {
    expect(factorialIterative(0)).toEqual(1);
  });

  it("calculates the factorial of 1", function() {
    expect(factorialIterative(1)).toEqual(1);
  });

  it("calculates the factorial of 2", function() {
    expect(factorialIterative(2)).toEqual(2);
  });

  it("calculates the factorial of 3", function() {
    expect(factorialIterative(3)).toEqual(6);
  });

  it("calculates the factorial of 4", function() {
    expect(factorialIterative(4)).toEqual(24);
  });

  it("calculates the factorial of 15", function() {
    expect(factorialIterative(15)).toEqual(1307674368000);
  });  
});

describe("factorial - recursive", function() {
  it("calculates the factorial of 0", function() {
    expect(factorialRecursive(0)).toEqual(1);
  });

  it("calculates the factorial of 1", function() {
    expect(factorialRecursive(1)).toEqual(1);
  });

  it("calculates the factorial of 2", function() {
    expect(factorialRecursive(2)).toEqual(2);
  });

  it("calculates the factorial of 3", function() {
    expect(factorialRecursive(3)).toEqual(6);
  });

  it("calculates the factorial of 4", function() {
    expect(factorialRecursive(4)).toEqual(24);
  });

  it("calculates the factorial of 15", function() {
    expect(factorialRecursive(15)).toEqual(1307674368000);
  });  
});