var http = require('http');
var utils = require('util');
var path = require('path');
var fs = require('fs');

var data;
fs.readFile('./MockData.json', 'utf8', function (err, data) {
    if (err) {
        console.log("ERROR: Configuration load - " + err);
        throw err;
    } else {
        try {
            data = JSON.parse(data);
            console.log("Configuration loaded successfully");
	    console.log(data);
        }
        catch (ex) {
            console.log("ERROR: Configuration parse - " + err);
        }


    }
});
