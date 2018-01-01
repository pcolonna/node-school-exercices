/* 
  Exercise 12 

  Write an HTTP server that receives only POST requests and converts  
  incoming POST body characters to upper-case and returns it to the client.  
   
  Your server should listen on the port provided by the first argument to  
  your program.

*/

const http = require('http')
const map = require('through2-map')

const port = process.argv[2]
const file = process.argv[3]

const server = http.createServer(function (req, res) {
  req.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase() 
     })).pipe(res)
})

server.listen(port)

/* Official solution

    var http = require('http')
    var map = require('through2-map')
    
    var server = http.createServer(function (req, res) {
      if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))


*/
