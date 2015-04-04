//Load modules
var sqlite3	= require('sqlite3').verbose();
var db = new sqlite3.Database('./records.db');

var table_name = "pet_info";

db.all("SELECT name,imageUrl FROM " + pet_info, function(err, rows) {  
        rows.forEach(function (row) {  
            console.log(row.name, row.imageUrl);  
        })  
    });   
db.close();