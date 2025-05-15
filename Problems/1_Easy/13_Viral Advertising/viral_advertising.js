/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function viralAdvertising(n) {
  let sharedPosts = 5;
  let cumulativeLikes = 0;
  for (let i = 0; i < n; i++) {
    const likes = Math.floor(sharedPosts / 2);
    sharedPosts = likes * 3;
    cumulativeLikes += likes;
  }
  return cumulativeLikes;
}

// Test cases
console.log(viralAdvertising(3)); // Output: 9
console.log(viralAdvertising(4)); // Output: 15
