var express = require('express')
var app = express()

console.log(__dirname)
app.set('views', process.argv[3])
app.set('view engine', 'jade')
app.get('/home', (req, res) => {
  res.render('index', { date: new Date().toDateString() })
})

app.listen(process.argv[2])