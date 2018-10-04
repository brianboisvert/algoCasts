// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  charCount = {};
  arr = str.split('');
  let max = 0
  let maxChar = ''

  for (let char of arr) {
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  for (let char in charCount) {
    if (charCount[char] > max) {
      max = charCount[char];
      maxChar = char;
    }
  }

  return maxChar;
}

maxChar('hello');
module.exports = maxChar;
