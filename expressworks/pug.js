const express = require('express')
const path = require('path')

const port = process.argv[2]
const index = process.argv[3]

const app = express()
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'pug')

app.get('/home', (req, res) => {
  res.render(index, {date: new Date().toDateString()})
})

app.listen(port)
