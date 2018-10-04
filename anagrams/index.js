// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(string) {
  return string.replace(/[^a-z]/gi, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const charA = charMap(stringA);
//   const charB = charMap(stringB);
//
//   if (Object.keys(charA).length !== Object.keys(charB).length) {
//    return false
//   }
//
//   for (let char in  charA) {
//     if (charA[char] !== charB[char]) {
//       return false
//     }
//   }
//
//   return true
// }
//
// function charMap(str) {
//   const charMap ={};
//
//   for (let char of str.replace(/[^a-z]/gi, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//
//   return charMap
// }
