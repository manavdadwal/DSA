/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let len = arr.length;

  /**
   * @param
   * This below params will store the count of the numbers in the array.
   * @positiveInt
   * @negativeInt
   * @zeroInt
   */

  let positiveInt = 0;
  let negativeInt = 0;
  let zeroInt = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i] > 0) {
      positiveInt++;
    }
    if (arr[i] < 0) {
      negativeInt++;
    }
    if (arr[i] == 0) {
      zeroInt++;
    }
  }
  console.log(positiveInt / len);
  console.log(Math.abs(negativeInt) / len);
  console.log(zeroInt / len);
  return [positiveInt / len, Math.abs(negativeInt) / len, zeroInt / len];
}

// Test Cases
console.log(plusMinus([-4, 3, -9, 0, 4, 1])); // [0.5, 0.3333333333333333, 0.16666666666666666]
console.log(plusMinus([1, 1, 0, -1, -1])); // [0.4, 0.4, 0.2]
