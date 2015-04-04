//Load modules
var sqlite3         =       require('sqlite3').verbose();
var db              =       new sqlite3.Database('./database_name.db');

//Perform SELECT Operation
db.all("SELECT * from pet_info",function(err,rows){
	console.log(rows);
//rows contain values while errors, well you can figure out.
});