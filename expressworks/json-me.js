const express = require('express')
const fs = require('fs')

const app = express()

const port = process.argv[2]
const file = process.argv[3]

app.get('/books', (req, res) => {
  fs.readFile(file, (err, data) => {
    if (err) res.sendStatus(500)
    try {
      books = JSON.parse(data)
      res.json(books)
    } catch (err) {
      res.sendStatus(500)
    }
  })
})

app.listen(port)
