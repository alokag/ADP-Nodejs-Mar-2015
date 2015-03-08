function f1(next){
	setTimeout(function(){
		console.log("f1 is invoked");
		if (next) next();
	},5000)
}
function f2(next){
	setTimeout(function(){
		console.log("f2 is invoked");
		if (next) next();
	},5000)
}
function f3(next){
	setTimeout(function(){
		console.log("f3 is invoked");
		if (next) next();
	},5000)
}
function f4(next){
	setTimeout(function(){
		console.log("f4 is invoked");
		if (next) next();
	},5000)
}

var tasks = [f4, f3, f2, f1]

function run(tasks){
	if (tasks.length === 0) return;
	var first = tasks[0];
	var next = (function(tasks){
		return function(){
			run(tasks);
		}
	})(tasks.slice(1));
	first(next);
}

