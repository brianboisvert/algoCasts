// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let phrase = '';
  let i = 1

  for (let word of str.split(" ")) {
    if (i !== str.split(" ").length) {
      phrase += word.charAt(0).toUpperCase() + word.split('').slice(1).join('') + " ";
      i++
    } else {
      phrase += word.charAt(0).toUpperCase() + word.split('').slice(1).join('');
    }
  }

  return phrase

}

module.exports = capitalize;
