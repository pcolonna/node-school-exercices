const express = require('express')
const app = express()

const PORT = process.argv[2]
const CONTENT = process.argv[3]

app.use(require('stylus').middleware(CONTENT));
app.use(express.static(CONTENT));

app.listen(PORT)
