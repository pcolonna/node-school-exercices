// Exercise 6: Make it modular

const fs = require('fs')
const path = require('path')

module.exports = function (dirName, extensionName, callback) {
 
  fs.readdir(dirName, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + extensionName
    })

    callback(null, list)
  })

}
