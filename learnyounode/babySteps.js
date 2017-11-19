// Exercise 2
/* Write a program that accepts one or more numbers as command-line arguments  
   and prints the sum of those numbers to the console (stdout).  
*/

const args = process.argv

let sum = 0
for (var i = 2; i < args.length; i++) { 
  sum += Number(args[i])
}

console.log(sum)
