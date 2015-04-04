var http = require('http');
var utils = require('util');
var path = require('path');
var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('records.db');
var json;

var table_name = "pet_info";
var pets;
//console.log(pets);
var pet;
var id;
var name;
var url;

fs.readFile('./MockData.json', 'utf8', function (err, data) {
    console.log("JSON Initializing...");
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
            pets = mockdata.pets
            // for (i = 0; i < pets.length; i++)
            // {
            //   pet = pets[i];
            //   id = pet.id;
            //   name = pet.name;
            //   url = pet.url;
            //   console.log(i + ": id: " + id + ", name: " + ", url: " + url);
            // }

            //var pet = data["mockdata"]["pets"][0];
            //console.log(pet);
            
            var stmt = db.prepare("INSERT INTO " + table_name + "(id,name,imageUrl) VALUES (?,?,?)");
            for (var i = 0; i < 10; i++) {
                pet = pets[i];
                id = pet.id;
                name = pet.name;
                url = pet.url;
                console.log(i + ": id: " + id + ", name: " + name + ", url: " + url);
                stmt.run(id, name, url);
                console.log("Row inserted");
            }
            stmt.finalize();

            db.each("SELECT rowid AS rowid, name, imageUrl FROM " + table_name, function(err, row) {
                console.log(row.rowid + ": " + row.name + ", " + row.imageUrl);
            });

        }
        catch (ex) {
            console.log("ERROR: JSON parse - " + err);
        }
    }
    console.log("JSON initialized!");

    db.close(function() {
      console.log("Database Closed");
    });
});

db.serialize(function() {
  console.log("Database Serialization Initializing...");
  db.run("CREATE TABLE if not exists " + table_name + " (id INTEGER PRIMARY KEY, name TEXT, imageUrl TEXT)");
  console.log("Table " + table_name + " initialized!");  
});




