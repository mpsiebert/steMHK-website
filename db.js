// set up database but haven't added anything yet
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE, (err) => {
  if(err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.run('CREATE TABLE users(email TEXT, pass TEXT)');

db.close();
