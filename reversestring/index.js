// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // FIRST SOLUTION
  // return str
  //   .split('')
  //   .reverse()
  //   .join('')

  // SECOND SOLUTION
  // let reversed = '';
  //
  // for (let character of str) {
  //   reversed = character + reversed
  // }
  //
  // return reversed

  // THIRD SOLUTION
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

reverse('hello');

module.exports = reverse;
