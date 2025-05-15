/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  let totalVal = arr.reduce((sum, ele) => sum + ele, 0);
  const minVal = totalVal - arr[arr.length - 1];
  const maxVal = totalVal - arr[0];
  console.log(minVal, maxVal);
}

// Test case
miniMaxSum([1, 3, 5, 7, 9]); // Output: 16 24
miniMaxSum([1, 2, 3, 4, 5]); // Output: 10 14
