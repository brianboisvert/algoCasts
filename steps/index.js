// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (n === row ) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? stair += "#" : stair += " ";

  steps(n, row, stair);
}


module.exports = steps;
// FIRST
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let hashString = '';
//
//     for (let j = 1; j <= i; j++) {
//       hashString += '#';
//     }
//
//     spaceCount = n - hashString.length
//
//     while (spaceCount > 0) {
//       hashString += " ";
//       spaceCount--;
//     }
//     console.log(hashString);
//   }
// }

// SECOND
// function steps(n) {
//   for (let row = 1; row <= n; row++) {
//     let stair = '';
//     for (let column = 1; column <= n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
//   }
// }
