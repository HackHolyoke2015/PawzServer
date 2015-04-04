//Load modules
var sqlite3         =       require('sqlite3').verbose();
var db              =       new sqlite3.Database('./database_name.db');


db.all("SELECT * from pet_info", function(err, rows) {
	console.log(rows.toString());

	console.log(rows[0]);
});