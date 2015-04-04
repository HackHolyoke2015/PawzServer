var http = require('http');
var utils = require('util');
var path = require('path');
var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

var data;
fs.readFile('./MockData.json', 'utf8', function (err, data) {
    if (err) {
        console.log("ERROR: JSON load - " + err);
        throw err;
    } else {
        try {
            data = JSON.parse(data);
            console.log("JSON loaded successfully");
            var parsed = JSON.parse(data);
            console.log(parsed);
            var pet = data["mockdata"]["pets"][0];
            console.log(pet);

	    console.log(data);
        }
        catch (ex) {
            console.log("ERROR: JSON parse - " + err);
        }


    }
});
