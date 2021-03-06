var express = require("express"),
	app = express(),
	path = require("path"),
	sqlite3	= require('sqlite3').verbose();
	//db = new sqlite3.Database('./records.db');

var table_name = "pet_info";
var htmlPath = '/PawzClient/html';
var currentIndex = 0;
// app.get('/',function(req,res){
// 	console.log("Getting Index page");
// 	res.sendFile(path.join(__dirname + htmlPath +  '/index.html'));
// 	//__dirname : It will resolve to your project folder.
// });

app.get('/images',function(req, res){
	var db = new sqlite3.Database('./records.db');
	console.log("Getting images");

	var json;
	var images = [];
	var i = 0;
	db.all("SELECT imageUrl FROM " + table_name, function(err, rows) {  
		rows.forEach(function (row) {  
		    //console.log(row.imageUrl);
		    images[i] = row.imageUrl;
		    i++;
		    //console.log("Url added to array");
		});
		json = JSON.stringify(rows);
		console.log(rows.toString());
		console.log(json);

		res.type('text/plain');
  		res.send(json);
	});

	db.close();
});

app.get('/',function(req,res){
	console.log("Getting home page");
	res.sendFile(path.join(__dirname + '/PawzClient/NicoleClient' + '/pawss.html'));
});

app.get('/pawz_home.html',function(req,res){
	console.log("Getting home page");
	res.sendFile(path.join(__dirname + '/PawzClient/NicoleClient' + '/pawss.html'));
});

app.get('/jquery.min.js',function(req,res){
	console.log("Getting jquery");
	res.sendFile(path.join(__dirname + '/PawzClient/NicoleClient' + '/jquery-1.11.2.min.js'));
});

app.get('/respond.min.js',function(req,res){
	console.log("Getting jquery");
	res.sendFile(path.join(__dirname + htmlPath + '/respond.min.js'));
});

app.get('/paws.css',function(req,res){
	console.log("Getting paws.css");
	res.sendFile(path.join(__dirname + '/PawzClient/NicoleClient' + '/paws.css'));
});

app.get('/main.js',function(req,res){
	console.log("Getting main.js");
	res.sendFile(path.join(__dirname + '/PawzClient/NicoleClient' + '/main.js'));
});

app.get('/petDetails',function(req,res){
	console.log("Getting Pet Details");
	res.sendFile(path.join(__dirname + htmlPath + '/blooptemplet.html'));
});

app.get('/boilerplate.css',function(req,res){
	console.log("Getting Boilerplate");
	res.sendFile(path.join(__dirname + htmlPath + '/boilerplate.css'));
});

app.get('/pet/:id', function(req, res){
	var id = req.params.id;
	var str = id.split("=");
	console.log(str[1]);
	var name = str[1].toString();

	var db = new sqlite3.Database('./records.db');
	console.log("Getting Pet details");

	var json;
	var pets = [];
	var pet = {};
	

	db.all("SELECT name, imageUrl FROM " + table_name + " WHERE name=\"" + name + "\"", function(err, rows) {
		console.log("SELECT");

		rows.forEach(function (row) {  
		    //console.log(row.imageUrl);
		    pet.name = row.name;
		    pet.imageUrl = row.imageUrl;
		    pets[0] = pet;
		    //console.log("Url added to array");
		    console.log("For eached");
		});

		json = JSON.stringify(pets);
		console.log(pets.toString());
		console.log(json);

		res.type('text/plain');
  		res.send(json);
	});

	db.close();
});

app.get('/user/:id', function(req, res){
  res.send('user ' + req.params.id);
});

app.get('/currentIndex',function(req, res){
	console.log("Getting currentIndex");
	var json = JSON.stringify({ index: currentIndex});
	console.log(json);

	res.type('text/plain');
	res.send(json);
});

app.get('/pets',function(req, res){
	var db = new sqlite3.Database('./records.db');
	console.log("Getting pets");

	var json;
	var pets = [];
	var i = 0;
	var pet = {};
	db.all("SELECT name, imageUrl FROM " + table_name, function(err, rows) {  
		rows.forEach(function (row) {  
		    //console.log(row.imageUrl);
		    pet.name = row.name;
		    pet.imageUrl = row.imageUrl;
		    pets[i] = pet;
		    i++;
		    //console.log("Url added to array");
		});
		json = JSON.stringify(rows);
		console.log(rows.toString());
		console.log(json);

		res.type('text/plain');
  		res.send(json);
	});

	db.close();
});

app.listen(80);


console.log("Running at Port 80");


