const express = require('express')
const path = require('path')
const app = express()

const port = process.argv[2]
const file = process.argv[3]

app.use(express.static(file || path.join(__dirname, 'public')))
app.listen(port)
