var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('records.db');
var check;
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('MockData.json', 'utf8'));

// Write the callback function
function handleFile(err, data) {
  if (err) throw err
    
  obj = JSON.parse(data)

  console.log(obj);

    // You can now play with your datas
}

// db.serialize(function() {

//   db.run("CREATE TABLE if not exists lorem (info TEXT)");
//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//       console.log(row.id + ": " + row.info);
//   });
  
// });

// db.all("SELECT * FROM lorem", function(err, rows){
// 	console.log(rows, "HIIII"); 
// });

// db.close();



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