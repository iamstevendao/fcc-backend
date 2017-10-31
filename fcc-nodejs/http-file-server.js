var http = require('http')
var fs = require('fs')
var server = http.createServer((req, res) => {
  //console.log(req)
  let read = fs.createReadStream(process.argv[3])
  //console.log(read)
  read.pipe(res)
})
server.listen(process.argv[2])