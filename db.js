/*Low Db */

var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: []})
  .write()

/* end Lowdb */

module.exports = db;