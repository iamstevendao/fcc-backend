var express = require('express')
var bodyparser = require('body-parser')
var app = express()

// use body-parser to parse the body of request values
app.use(bodyparser.urlencoded({ extended: false }))

app.post('/form', (req, res) => {
  res.end(req.body.str.split('').reverse().join(''))
})
app.listen(process.argv[2])