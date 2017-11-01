var express = require('express')
var app = express()

app.get('/search', (req, res) => {
  //let response = {}
  res.end(JSON.stringify(req.query))
})

app.listen(process.argv[2])