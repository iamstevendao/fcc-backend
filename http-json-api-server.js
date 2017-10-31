var http = require('http')
var url = require('url')

var server = http.createServer((req, res) => {
  if (req.method != 'GET')
    return
  let urlObject = url.parse(req.url, true)
  let time = new Date(urlObject.query.iso)
  let response = {}
  if (urlObject.pathname === '/api/parsetime') {
    response.hour = time.getHours()
    response.minute = time.getMinutes()
    response.second = time.getSeconds()
  } else if (urlObject.pathname === '/api/unixtime') {
    response.unixtime = time.getTime()
  }
  //console.log(response)
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(response))
})
server.listen(process.argv[2])