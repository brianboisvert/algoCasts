// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1) 1
//       '#'
//   pyramid(2) 3
//       ' # '
//       '###'
//   pyramid(3) 5
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4) 7
//       '   #   ' 1
//       '  ###  ' 2
//       ' ##### ' 3
//       '#######' 4

//   pyramid(5) 9
//       '    #    ' 1 (1, 8)
//       '   ###   ' 2 (3, 6)
//       '  #####  ' 3 (5, 4)
//       ' ####### ' 4 (7, 2)
//       '#########' 5 (9, 0)


function pyramid(n, row = 0, level = '') {
  if (n === 0) {
    return;
  }

  if (n)
}

module.exports = pyramid;

// function pyramid(n) {
//   const midpoint = Math.floor((n * 2 - 1) / 2) - 1;
//
//   for (let row  = 0; row < n; row++) {
//     let level = '';
//
//     for (let column = 0; column < n * 2 - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }
