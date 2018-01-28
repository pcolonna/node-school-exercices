const express = require('express')
const crypto = require('crypto')

const app = express()

const PORT = process.argv[2]

app.put('/message/:id',  (req, res) => {
  const date = new Date().toDateString()
  const hashed = crypto
    .createHash('sha1')
    .update(date + req.params.id)
    .digest('hex')
  res.send(hashed)
})

app.listen(PORT)
