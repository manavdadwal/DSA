/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
  let maxCandleHeight = Math.max(...candles);
  let maxCandles = candles.filter(
    (height) => height === maxCandleHeight
  ).length;
  return maxCandles;
}

// Test cases
console.log(birthdayCakeCandles([3, 2, 1, 3])); // Output: 2
console.log(birthdayCakeCandles([1, 2, 3, 4, 5])); // Output: 1
