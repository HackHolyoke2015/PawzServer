//Load modules
var sqlite3 = require('sqlite3').verbose();
var http = require('http');
var utils = require('util');
var path = require('path');
var fs = require('fs');
var json;
var db = new sqlite3.Database('./pets.db'); // name of database is pets :3


db.run("CREATE TABLE if not exists pet_info (info TEXT)"); //create table pet_info


fs.readFile('MockData.json', 'utf8', function (err, data) {
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
            console.log(mockdata);
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
        }
        catch (ex) {
            console.log("ERROR: JSON parse - " + err);
        }
    }
    console.log("JSON initialized!");
});


db.all("SELECT name, imageUrl FROM pet_info", function(err, rows) {
	//rows.forEach(function (row) {  
    //    console.log(row.name, row.imageUrl);  
    //})
});