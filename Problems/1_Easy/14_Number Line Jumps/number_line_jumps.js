/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function kangaroo(x1, v1, x2, v2) {
  if (v1 === v2) return x1 === x2 ? "YES" : "NO";
  let n = (x2 - x1) / (v1 - v2);
  return n >= 0 && Number.isInteger(n) ? "YES" : "NO";
}

// Test Cases
console.log(kangaroo(0, 3, 4, 2)); // YES
console.log(kangaroo(0, 2, 5, 3)); // NO
