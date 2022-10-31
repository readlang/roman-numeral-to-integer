function romanNumeral(string) {
  // type your code here

  dict = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
  }

  total = 0

  for (i=0; i<string.length; i++) {
    if ( !string[i+1] || dict[string[i]] >= dict[string[i+1]]   ) {
      total += dict[string[i]]
    } else {
      total -= dict[string[i]]
    }

  }



  return total
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
