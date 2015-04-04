var http = require('http');
var utils = require('util');
var path = require('path');
var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

var json;
fs.readFile('./MockData.json', 'utf8', function (err, data) {
    if (err) {
        console.log("ERROR: JSON load - " + err);
        throw err;
    } else {
        try {
            json = JSON.parse(data);
            console.log("JSON loaded successfully");
            console.log(json.data);

            var mockdata = json.mockdata;

            console.log(mockdata);

            //var pet = data["mockdata"]["pets"][0];
            //console.log(pet);
        }
        catch (ex) {
            console.log("ERROR: JSON parse - " + err);
        }


    }
});
