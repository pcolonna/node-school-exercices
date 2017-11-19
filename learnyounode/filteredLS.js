/* Exercise 5

  Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. You will be provided a directory  
  name as the first argument to your program (e.g. '/path/to/dir/') and a  
  file extension to filter by as the second argument.  

*/

const fs = require('fs')
const dirPath = process.argv[2]
const fileExt = process.argv[3]

const filterDir = fs.readdir(dirPath, function (err, list) {
  if (err) console.log(err)

  list.forEach(function (file) {
   if (file.split('.')[0] !== fileExt && file.split('.').pop() === fileExt) {
     console.log(file)
   }
  })
}) 


/*

 Interresting part is path.extname.
 Good to know.

 var fs = require('fs')
    var path = require('path')
    
    var folder = process.argv[2]
    var ext = '.' + process.argv[3]
    
    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })


*/
