var express = require("express"),
	app = express(),
	path = require("path");

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
	res.sendFile(path.join(__dirname + htmlPath +'/sitemap.html'));
});

app.listen(80);

console.log("Running at Port 80");
