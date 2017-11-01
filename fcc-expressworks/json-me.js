var express = require('express')
var fs = require('fs')
var app = express()
app.get('/books', (req, res) => {
  fs.readFile(process.argv[3], (err, data) => {
    if (err) {
      res.end("error occured")
    }
    res.json(JSON.parse(data))
    res.end()
  })
})
app.listen(process.argv[2])