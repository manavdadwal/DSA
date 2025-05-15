Problem Statement

![alt text](/assets/1_Easy/6_Staircase/image.png)
![alt text](/assets/1_Easy/6_Staircase/image-1.png)


* Important Note:

* In JavaScript, <b>process.stdout.write()</b> is a function used to write data directly to the standard output stream (stdout). It is part of the process module, which provides information about, and control over, the current Node.js process. Unlike <b>console.log()</b>, <b>process.stdout.write()</b> does not automatically append a newline character to the output. It is commonly used for printing data without extra formatting, such as in command-line interfaces or when creating streaming outputs.

* JavaScript<br>
process.stdout.write("This is a string without a newline.");<br>
process.stdout.write("This will be printed on the same line.");<br>
process.stdout.write("To add a new line, use \\n.");<br>
process.stdout.write("Like this.\n");

* It's important to note that <b>process.stdout.write()</b> only accepts strings as arguments. Passing other data types will result in a TypeError.

* JavaScript<br>
process.stdout.write(123); // Throws a TypeError<br>
process.stdout.write(true); // Throws a TypeError<br>
process.stdout.write({ key: "value" }); // Throws a TypeError