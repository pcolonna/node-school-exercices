const filter = require('./filter')

const dirPath = process.argv[2]
const fileExt = process.argv[3]

filter(dirPath, fileExt, function (err, files) {
 if (err){
   return console.log('Error: ', err)
 }

 files.forEach(function (item) {
     console.log(item)
 })
})

