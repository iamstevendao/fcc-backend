var http = require('http')
var bl = require('bl')
var responses = []
var length = 0
var urls = []
// get urls from arguments
for (let i = 2; i < 5; i++) {
  urls.push(process.argv[i])
}
//console.log(urls)
// get data from urls
// async.map([...urls], http.get, function (err, responses) {
//   responses.forEach((value) => {
//     console.log(value)
//     value.setEncoding('utf8')
//     value.pipe(bl((err, data) => {
//       console.log(data)
//     }))
//   })
// })

urls.forEach((value, i) => {
  http.get(value, (response) => {
    response.setEncoding('utf8')
    response.pipe(bl((err, data) => {
      responses[i] = data.toString() // store data in the responses
      length++ // increase the counter
      // print all data in order when all 3 reponses
      if (length === 3) {
        responses.forEach((value) => {
          console.log(value)
        })
      }
    }))
  })
})