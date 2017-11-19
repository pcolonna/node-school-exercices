/* Exercise 3

  Write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (\n) it contains to the  
  console (stdout), similar to running cat file | wc -l. 

*/

const fs = require('fs')
const buf = fs.readFileSync(process.argv[2]) // Read the file.
const str = buf.toString()                   // Convert Buffer object to string
const splitted = str.split('\n')             // Split into an array

// console.log(splitted)
console.log(splitted.length - 1)

