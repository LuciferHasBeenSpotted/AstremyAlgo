const ROMAN_NUMBERS = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
};

function fromRomanToArabic(romanNumbers) {
  romanNumbers = romanNumbers.split('');
  let total = 0;
  for(let i = 0; i < romanNumbers.length ; i++) {
    const next = ROMAN_NUMBERS[romanNumbers[i + 1]],
    it = ROMAN_NUMBERS[romanNumbers[i]];
    if(next > it) {
      total += next - it;
      i++;
    }else {
      total += it;
    };
  }
  return total;
};

function fromArabicToRoman(arabicNumber) {
  let romans = '';
  for(const key in ROMAN_NUMBERS) {
    const value = ROMAN_NUMBERS[key];
    if(value <= arabicNumber) {
      for(let i = 0; i < 3; i++) {
        if(arabicNumber - value >= 0) {
          arabicNumber-= value;
          romans += key;
        };
      };
    };
  };
  return romans;
};

console.log(((a, b) => {
  return fromArabicToRoman(fromRomanToArabic(a) + fromRomanToArabic(b));
})('CCCXLVII', 'CCXCIX'));
