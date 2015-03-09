var nodeJsWebSocket =  require("nodejs-websocket");
var server = nodeJsWebSocket.createServer(function(con){
	console.log("a new connection established");
	var timer = setInterval(function(){
		con.sendText(new Date().toString());
	},2000);
	con.on("text", function(msg){
		if (msg === "stop"){
			clearInterval(timer);
		} else {
			console.log("unknown message", msg);
		}
	});
});
server.listen(9999);
console.log("SOcket server listening on port 9999");