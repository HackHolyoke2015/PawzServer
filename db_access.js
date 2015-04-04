//Load modules
var sqlite3	= require('sqlite3').verbose();
var db = new sqlite3.Database('./database_name.db');


db.each("SELECT rowid AS id, name, imageUrl FROM " + table_name, function(err, row) {
    console.log(row.id + ": " + row.name + ", " + row.imageUrl);
});