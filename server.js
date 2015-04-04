var express = require("express"),
	app = express(),
	path = require("path"),
	sqlite3	= require('sqlite3').verbose(),
	db = new sqlite3.Database('./records.db');

var table_name = "pet_info";
var htmlPath = '/PawzClient/html';

app.get('/',function(req,res){
	console.log("Getting Index page");
	res.sendFile(path.join(__dirname + htmlPath +  '/index.html'));
	//__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
	console.log("Getting About page");
	res.sendFile(path.join(__dirname + htmlPath + '/about.html'));
});

app.get('/sitemap',function(req,res){
	console.log("Getting Sitemap page");
	res.sendFile(path.join(__dirname + htmlPath + '/sitemap.html'));
});

app.get('/images',function(req, res){
	console.log("Getting images");

	var json;
	var images = [];
	var i = 0;
	db.all("SELECT imageUrl FROM " + table_name, function(err, rows) {  
		rows.forEach(function (row) {  
		    console.log(row.imageUrl);
		    images[i] = row.imageUrl;
		    i++;
		    console.log("Url added to array");
		});
		json = JSON.stringify(rows);
	});
	res.type('text/plain');
  	res.send(json);
  	console.log(json);

	db.close();
});



app.listen(80);


console.log("Running at Port 80");


