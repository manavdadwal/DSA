/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  let stairView = "#";
  for (let i = 0; i <= n - 1; i++) {
    for (let j = 0; j < n - (i + 1); j++) {
      process.stdout.write(" ");
    }
    for (let k = 0; k < 1 + i; k++) {
      process.stdout.write(stairView);
    }
    console.log("");
  }
}

// Test cases
staircase(6);

// Expected Output :
//      #
//     ##
//    ###
//   ####
//  #####
// ######

staircase(1);

// Expected Output :
//      #
