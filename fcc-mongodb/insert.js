var mongo = require('mongodb').MongoClient
var doc = {
  firstName: process.argv[2],
  lastName: process.argv[3]
}
// connect to db
mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, db) => {
  if (err) throw err

  // connect to collection
  let docs = db.collection('docs')

  console.log(JSON.stringify(doc))
  // query
  docs.insert(doc, (err, data) => {
    if (err) throw err
  })

  // close the db
  db.close()
})