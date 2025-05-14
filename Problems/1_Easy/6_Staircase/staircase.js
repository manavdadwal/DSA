/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    let stairView = "#"
    for (let i = 0; i <= n - 1; i++) {
        for (let j = 0; j < n - (i + 1); j++) {
            process.stdout.write(" ")
        }
        for (let k = 0; k < 1 + i; k++) {
            process.stdout.write(stairView)
        }
        console.log("")
    }
}

// Expected Output : 
//      #
//     ##
//    ###
//   ####
//  #####
// ######

// In JavaScript, process.stdout.write() is a function used to write data directly to the standard output stream (stdout). It is part of the process module, which provides information about, and control over, the current Node.js process. Unlike console.log(), process.stdout.write() does not automatically append a newline character to the output. It is commonly used for printing data without extra formatting, such as in command-line interfaces or when creating streaming outputs.
// JavaScript
process.stdout.write('This is a string without a newline.');
process.stdout.write('This will be printed on the same line.');
process.stdout.write('To add a new line, use \\n.');
process.stdout.write('Like this.\n');
// It's important to note that process.stdout.write() only accepts strings as arguments. Passing other data types will result in a TypeError.
// JavaScript
process.stdout.write(123); // Throws a TypeError
process.stdout.write(true); // Throws a TypeError
process.stdout.write({ key: 'value' }); // Throws a TypeError
