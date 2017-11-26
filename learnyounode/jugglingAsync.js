/*
    Exercise 9
   
    This problem is the same as the previous problem (HTTP COLLECT) in that  
  you need to use http.get(). However, this time you will be provided with  
  three URLs as the first three command-line arguments.  
   
  You must collect the complete content provided to you by each of the URLs  
  and print it to the console (stdout). You don't need to print out the  
  length, just the data as a String; one line per URL. The catch is that you  
  must print them out in the same order as the URLs are provided to you as  
  command-line arguments.
*/

const http = require('http')
const bl = require('bl')
// const url = process.argv[2]
const results = []
let counter = 0

function httpGet(i) {
  const url = process.argv[2 + i]
  http.get(url, function (response) {
    response.pipe(bl(function (err, data) {
      if(err) console.err(err)

      results[i] = data.toString()
      counter++
      
      if (counter === 3) {
        print();
      }
    }))
  })
}

function print () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}
