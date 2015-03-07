var fs = require("fs");
/*fs.readFile("test.txt" , {encoding : "utf8"}, function(err, fileContents){
	console.log(fileContents);	
});*/
var stream = fs.createReadStream("test.txt", {encoding : "utf8"});
/*Possible stream events are  - open, close, data, error */

var dataEventOccurance = 0;

stream.on("data", function(dataChunk){
	++dataEventOccurance;
	console.log(dataChunk);
});
stream.on("end", function(){
	console.log("done with " + dataEventOccurance + " reads");

});