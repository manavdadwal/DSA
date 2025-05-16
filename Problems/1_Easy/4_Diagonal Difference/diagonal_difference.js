/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  let aSet = 0;
  let bSet = 0;
  for (let i = 0; i < arr.length; i++) {
    aSet += arr[i][i];
    bSet += arr[i][arr.length - 1 - i];
  }
  return Math.abs(aSet - bSet);
}

/**
 * @Explanation for `arr[i][arr.length - 1 - i]`
 */

// |  i  | (arr.length - 1 - i) | arr[i][...] |
// | --- | -------------------- | ----------- |
// |  0  |    3 - 1 - 0 = 2     |  arr[0][2]  |
// |  1  |    3 - 1 - 1 = 1     |  arr[1][1]  |
// |  2  |    3 - 1 - 2 = 0     |  arr[2][0]  |

// Test Cases
console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
); // 15
console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // 0
