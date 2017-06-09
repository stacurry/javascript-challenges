describe("converting to old roman numerals", function() {
  it("converts 1 to I", function() {
    expect(convertToRoman(1)).toEqual("I");
  });

  it("converts 4 to IIII", function() {
    expect(convertToRoman(4)).toEqual("IIII");
  });

  it("converts 5 to V", function() {
    expect(convertToRoman(5)).toEqual("V");
  });

  it("converts 9 to VIIII", function() {
    expect(convertToRoman(9)).toEqual("VIIII");
  });

  it("converts 2942 to MMDCCCCXXXXII", function() {
    expect(convertToRoman(2942)).toEqual("MMDCCCCXXXXII");
  });
});

describe("converting to modern roman numerals", function() {
  it("converts 4 to IV", function() {
    expect(convertToRoman(4, true)).toEqual("IV");
  });

  it("converts 8 to VIII", function() {
    expect(convertToRoman(8, true)).toEqual("VIII");
  });

  it("converts 9 to IX", function() {
    expect(convertToRoman(9, true)).toEqual("IX");
  });

  it("converts 39 to XXXIX", function() {
    expect(convertToRoman(39, true)).toEqual("XXXIX");
  });

  it("converts 99 to XCIX", function() {
    expect(convertToRoman(99, true)).toEqual("XCIX");
  });

  it("converts 400 to CD", function() {
    expect(convertToRoman(400, true)).toEqual("CD");
  });

  it("converts 944 to CMXLIV", function() {
    expect(convertToRoman(944, true)).toEqual("CMXLIV");
  });

  it("converts 2999 to MMCMXCIX", function() {
    expect(convertToRoman(2999, true)).toEqual("MMCMXCIX");
  });
});
