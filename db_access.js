//Load modules
var sqlite3	= require('sqlite3').verbose();
var db = new sqlite3.Database('./database_name.db');

var table_name = "pet_info";

var db = new sqlite3.Database(file);  
db.all("SELECT first_name,last_name FROM " + pet_info, function(err, rows) {  
        rows.forEach(function (row) {  
            console.log(row.first_name, row.last_name);  
        })  
    });   
db.close();