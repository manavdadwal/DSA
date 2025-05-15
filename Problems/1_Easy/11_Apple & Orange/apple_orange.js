/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const updatedApples = apples.map((num) => num + a);
  const updatedOranges = oranges.map((num) => num + b);
  const applesOnHouse = updatedApples.filter(
    (num) => num >= s && num <= t
  ).length;
  const orangesOnHouse = updatedOranges.filter(
    (num) => num >= s && num <= t
  ).length;
  console.log(applesOnHouse);
  console.log(orangesOnHouse);
}

// Test cases
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]); // Output: 1 1
countApplesAndOranges(3, 7, 1, 5, [2, 3, -1], [4, -2]); // Output: 2 1


function reverseNumber(number){
    return Number(number.toString().split('').reverse().join(''))
 }
 
 function isWholeNumber(value) {
   return Number.isInteger(value);
 }
     
 function beautifulDays(i, j, k) {
     // Write your code here
     let checkBeautifulDays = 0
     let count = 0
      for(let day = i; day <= j ;day++){
         checkBeautifulDays = (Math.abs(day - reverseNumber(day))) / k
         if(isWholeNumber(checkBeautifulDays)){
             count++
         }
      }
     return count       
 }