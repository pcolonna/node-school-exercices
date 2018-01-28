const express = require('express')

const app = express()
const PORT = process.argv[2]
 
app.get('/search', (req, res) => {
  res.send(req.query)
})

app.listen(PORT)
