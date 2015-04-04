var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('abc.db');
var check;
db.serialize(function() {
    var records = [
        {petID: 1,name:'george', url:'facebook.com'},
        {petID: 2,name:'bernice', url:'facebook.com'},
        {petID: 3,name:'jonathon', url:'facebook.com'},
        {petID: 4,name:'crystal', url:'facebook.com'},
        {petID: 5,name:'nicole', url:'facebook.com'},
        {petID: 6,name:'zach', url:'facebook.com'},
        {petID: 7,name:'greg', url:'facebook.com'},
    ];

  db.run("CREATE TABLE if not exists pet (info TEXT)");
  var stmt = db.prepare("INSERT INTO pet(petID,name,url) VALUES (?,?,?)");
  for (var i = 0; i <= records.length; i++) {
      stmt.run(records[i].petID, records[i].name, records[i].url);
  }
  stmt.finalize();

  //db.each("SELECT rowid AS id, info FROM pet", function(err, row) {
  //    console.log(row.id + ": " + row.info);
  //});
  
});

db.all("SELECT * FROM pet", function(err, rows){
	console.log(rows, "HIIII"); 
});

db.close();



//Perform SELECT Operation
//db.all("SELECT * from blah blah blah where this="+that,function(err,rows){
//rows contain values while errors, well you can figure out.
//});

//Perform INSERT operation.
//db.run("INSERT into table_name(col1,col2,col3) VALUES (val1,val2,val3)");

//Perform DELETE operation
//db.run("DELETE * from table_name where condition");

//Perform UPDATE operation
//db.run("UPDATE table_name where condition");