var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('users.sqlite3');

db.run("CREATE TABLE users (org_name TEXT, email TEXT, pass TEXT)");

for(var i = 0; i < 10; i++)
{
  db.run("INSERT INTO users (org_name, email, pass) VALUES (?, ?, ?)")
}
db.close();
