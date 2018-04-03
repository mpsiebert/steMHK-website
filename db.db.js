const sqlite3 = require('sqlite3');

var db = new sqlite3.Database('./data/roster.sqlite3');

db.run(
  `CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE,
    admin BOOLEAN,
    crypted_password TEXT,
    salt TEXT
  );`
);

var salt = encryption.salt();

db.run("INSERT INTO users (username, admin, crypted_password)")


// 
