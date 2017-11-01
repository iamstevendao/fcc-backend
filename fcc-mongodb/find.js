var mongo = require('mongodb').MongoClient
// connect to db
mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
  if (err) throw err

  // connect to collection
  let parrots = db.collection('parrots')

  // query
  parrots.find({
    age: {
      // age is greater than the command line input
      $gt: parseInt(process.argv[2])
    }
  }).toArray((err, documents) => {
    if (err) throw err
    console.log(documents)
  })

  // close the db
  db.close()
})