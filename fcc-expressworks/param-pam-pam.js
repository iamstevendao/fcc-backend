var express = require('express')
var crypto = require('crypto')
var app = express()

app.put('/message/:id', (req, res) => {
  let id = req.params.id
  let response = crypto
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.end(response)
})
app.listen(process.argv[2])