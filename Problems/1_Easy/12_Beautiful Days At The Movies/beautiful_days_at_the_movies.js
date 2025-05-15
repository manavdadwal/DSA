/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function reverseNumber(number) {
  return Number(number.toString().split("").reverse().join(""));
}

function isWholeNumber(value) {
  return Number.isInteger(value);
}

function beautifulDays(i, j, k) {
  let checkBeautifulDays = 0;
  let count = 0;
  for (let day = i; day <= j; day++) {
    checkBeautifulDays = Math.abs(day - reverseNumber(day)) / k;
    if (isWholeNumber(checkBeautifulDays)) {
      count++;
    }
  }
  return count;
}

// Test cases
console.log(beautifulDays(20, 23, 6)); // Output: 2
console.log(beautifulDays(1, 10, 1)); // Output: 4
