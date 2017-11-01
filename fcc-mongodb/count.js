var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
// connect to db
mongo.connect(url, (err, db) => {
  if (err) throw err

  // connect to collection
  let parrots = db.collection('parrots')
  console.log(process.argv[2])

  // count
  parrots.count({
    age: { $gt: +process.argv[2] } // use + to convert string to int
  }, (err, result) => {
    if (err) throw err
    console.log(result)
  })

  // close the db
  db.close()
})