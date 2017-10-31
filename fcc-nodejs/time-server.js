var net = require('net')
var server = net.createServer((socket) => {
  let date = new Date()
  let dateOfMonth = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
  let hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
  let min = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()
  let month = date.getMonth() > 8 ? date.getMonth() + 1 : '0' + date.getMonth()
  let response = date.getFullYear() + '-' + month + '-' + dateOfMonth + ' ' + hour + ':' + min + '\n'
  socket.end(response)
})
server.listen(process.argv[2])