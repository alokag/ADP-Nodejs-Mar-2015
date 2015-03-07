var http = require("http"),
	fs = require("fs"),
	path = require("path");

var server = http.createServer(function(req, res){

	var resourcePath = path.join(__dirname, req.url);
	fs.exists(resourcePath,function(exists){
		if (exists){
			var stream = fs.createReadStream(resourcePath, {encoding : "utf8"});
			stream.on("data", function(dataChunk){
				res.write(dataChunk);
			});
			stream.on("end", function(){
				res.end();
			});	
		} else {
			res.statusCode = 404;
			res.end();
		}
	});
	
});
server.listen(9090);
console.log("Server listening on port 9090");