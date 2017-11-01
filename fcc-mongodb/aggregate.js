var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
// connect to db
mongo.connect(url, (err, db) => {
  if (err) throw err

  // connect to collection
  let prices = db.collection('prices')

  // aggregate
  prices.aggregate([
    { $match: { size: process.argv[2] } }
    , {
      $group: {
        _id: 'avg',
        avg: {
          $avg: '$price'
        }
      }
    }]).toArray((err, res) => {
      if (err) throw err
      if (!res.length) throw new Error('No results found')
      let o = res[0]
      console.log(Number(o.avg).toFixed(2))
    })

  // close the db
  db.close()
})