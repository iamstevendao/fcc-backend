var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' + process.argv[2]
// connect to db
mongo.connect(url, (err, db) => {
  if (err) throw err

  // connect to collection
  let users = db.collection('users')

  // query
  users.update({
    username: 'tinatime'
  }, {
      $set: {
        age: 40
      }
    }, (err) => {
      if (err) throw err
    })

  // close the db
  db.close()
})