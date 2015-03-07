function f1(){
	setTimeout(function(){
		console.log("f1 is invoked");
	},5000)
}
function f2(){
	setTimeout(function(){
		console.log("f2 is invoked");
	},5000)
}
function f3(){
	setTimeout(function(){
		console.log("f3 is invoked");
	},5000)
}
function f4(){
	setTimeout(function(){
		console.log("f4 is invoked");
	},5000)
}

var tasks = [f1, f2, f3, f4]
