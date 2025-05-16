/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  let a1 = 0;
  let b1 = 0;
  for (let i = 0; i <= a.length; i++) {
    if (a[i] > b[i]) {
      a1++;
    } else if (b[i] > a[i]) {
      b1++;
    }
  }
  return [a1, b1];
}

// Test Cases
console.log(compareTriplets([1, 2, 3], [3, 2, 1])); // [1, 1]
console.log(compareTriplets([5, 6, 7], [3, 6, 10])); // [1, 1]
