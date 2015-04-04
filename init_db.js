var http = require('http');
var utils = require('util');
var path = require('path');
var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
var json;

var table_name = "user_info";

db.serialize(function() {

  db.run("CREATE TABLE if not exists " + table_name + " (info TEXT)");
  var stmt = db.prepare("INSERT INTO " + table_name + " VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM " + table_name, function(err, row) {
      console.log(row.id + ": " + row.info);
  });

  console.log("Table " + table_name + " initialized")
});

fs.readFile('./MockData.json', 'utf8', function (err, data) {
    if (err) {
        console.log("ERROR: JSON load - " + err);
        throw err;
    } else {
        try {
            json = JSON.parse(data);
            console.log("JSON loaded successfully");
            //console.log(json.data);

            var mockdata = json.mockdata;
            //console.log(mockdata);

            var pets = mockdata.pets;
            //console.log(pets);
            var pet;
            var id;
            var name;
            var url;
            for (i = 0; i < pets.length; i++)
            {
              pet = pets[i];
              id = pet.id;
              name = pet.name;
              url = pet.url;
              console.log(i + ": id: " + id + ", name: " + ", url: " + url);
            }

            //var pet = data["mockdata"]["pets"][0];
            //console.log(pet);
        }
        catch (ex) {
            console.log("ERROR: JSON parse - " + err);
        }


    }
});

db.close();
