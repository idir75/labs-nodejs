let connection = require('../config/db')
let MongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017/mydb"


class Message {

  static create (content, cb) {

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbase = db.db("mydb");
      var myobj = { messages: content, created_at: new Date() };
      dbase.collection("messages").insertOne(myobj, function(err, result) {
        if (err) throw err
        console.log("1 message inserted. Content= " + content + ", result = " + result)
        db.close()
        cb(result)
      })
    })
  }
}

module.exports = Message
