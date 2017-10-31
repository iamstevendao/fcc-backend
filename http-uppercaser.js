var http = require('http')
var map = require('through2-map')

var server = http.createServer((req, res) => {
  if (req.method != 'POST')
    return
  
  req.pipe(map((chunk) => (
    chunk.toString().toUpperCase()
  ))).pipe(res)
})

server.listen(process.argv[2])