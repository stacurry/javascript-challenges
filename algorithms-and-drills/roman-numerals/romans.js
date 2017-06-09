function convertToRoman(arabicNumber, modern=false) {
  var oldArabicToRoman = { M: 1000,
                           D: 500,
                           C: 100,
                           L: 50,
                           X: 10,
                           V: 5,
                           I: 1 };

  var newArabicToRoman = {  M: 1000,
                           CM: 900,
                            D: 500,
                           CD: 400,
                            C: 100,
                           XC: 90,
                            L: 50,
                           XL: 40,
                            X: 10, 
                           IX: 9,
                            V: 5,
                           IV: 4,
                            I: 1 };

  if (modern) {
    return convert(arabicNumber, newArabicToRoman);
  } else {
    return convert(arabicNumber, oldArabicToRoman);
  }
};

function convert(arabicNumber, conversionObject) {
  var romanNumeral = "";
  var remainder = arabicNumber;

  var romans = Object.keys(conversionObject);

  for (var i = 0; i < romans.length; i++) {
    var arabic = conversionObject[romans[i]];
    while (remainder >= arabic) {
      romanNumeral += romans[i];
      remainder -= arabic;
    };
  };
  return romanNumeral;
}