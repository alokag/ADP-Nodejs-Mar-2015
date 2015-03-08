var tasks = [];

function runTasks(req, res, tasks){
	if (tasks.length === 0) return;
	var first = tasks[0];
	var next = (function(req, res, tasks){
		return function(data){
			runTasks(req, res, tasks, data);
		}
	})(req,res, tasks.slice(1));
	first(req, res, next);
}

//task - function(req, res, next)
function addTask(task){
	tasks.push(task);
}

module.exports = {
	addTask : addTask,
	get : function(url, task){

	}
	run : function(){
		return function(req, res){
			runTasks(req, res, tasks);
		}
	}
}
