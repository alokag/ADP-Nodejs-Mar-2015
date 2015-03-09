var express = require('express');
var router = express.Router();
var bugService = require('../services/bugService');



/* GET users listing. */
router.get('/', function(req, res, next) {
  var bugs = req.session.bugs;
  res.render("bugs/index", {list : bugService.getAll(), msg : ''});
});

router.get('/new', function(req,res,next){
	res.render('bugs/new');
});

router.post('/toggle', function(req,res,next){
	var bug = req.session.bugs.filter(function(b) { return b.id === parseInt(req.body.id); })[0];
	if (bug){
		bug.isClosed = !bug.isClosed;
	}
	res.redirect('/bugs');
});
 
router.post('/new', function(req,res, next){
	req.session.bugs.push(req.body.newBug);
	res.render('bugs/index', {
		list : req.session.bugs,
		msg : "The new bug is successfully added"
	});
});

module.exports = router;
