/* Exercise 4

  Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines (\n) it contains to the  
  console (stdout), similar to running cat file | wc -l. 

*/

const fs = require('fs')

// Read the file asynchronously
const buf = fs.readFile(process.argv[2], function finished (err, result) {
  if (err) console.log(err)
  const str = result.toString()                   // Convert Buffer object to string
  const splitted = str.split('\n')             // Split into an array
  console.log(splitted.length - 1)
  }) 


