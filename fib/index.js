// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);


module.exports = fib;

// function fib(n) {
//   let fib = []
//
//   for (let  i = 0; i <= n; i++) {
//     if (i === 0) {
//       fib.push(0);
//     } else if (i === 1) {
//       fib.push(1);
//     } else {
//       let num = fib[i - 2] + fib[i - 1];
//       fib.push(num)
//     }
//   }
//
//   return fib[n]
// }



// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//
//   return fib(n - 1) + fib(n - 2);
// }
