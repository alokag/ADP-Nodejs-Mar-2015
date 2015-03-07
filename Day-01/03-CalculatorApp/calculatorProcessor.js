var url = require("url"),
	calculator = require("./calculator");

function process(req,res){

	var data = req.url.query;
	var result = calculator[data.op](data.n1.toNumber(), data.n2.toNumber());
	res.write(result.toString());
	res.end();
}

module.exports = {
	process : process
};