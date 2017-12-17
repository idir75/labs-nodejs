let MongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017/mydb"

let moment = require('../config/moment')

var ObjectId = require('mongodb').ObjectID;

class Message {

  constructor (row) {
    this.row = row
  }

  get messages() {
    return this.row.messages
  }

  get created_at() {
    return moment(this.row.created_at)
  }

  get id() {
    return this.row._id
  }

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

  static getAll(cb) {
    MongoClient.connect(url, function(err, db) {
    if (err) throw err
    var dbase = db.db("mydb");
    dbase.collection("messages").find({}).toArray(function(err, rows) {
    if (err) throw err;
    console.log(rows);
    db.close();
    cb(rows.map((row) => new Message(row)))
    });
  })
 }

 static find(id, cb) {
   MongoClient.connect(url, function(err, db) {
   if (err) throw err
   var dbase = db.db("mydb");
   var query = { '_id': new ObjectId(id) };
   dbase.collection("messages").find(query).toArray(function(err, rows) {
   if (err) throw err;
   console.log('id == ' + id);
   console.log('rows[0] == ' + rows[0]);
   db.close();
   cb(new Message(rows[0]))
   });
 })
 }

}

module.exports = Message
