var express = require('express');
var router = express.Router();

var bugs = [
		{"id":"1424758570222","title":"Login button is disabled","createdAt":"2015-02-24T06:16:10.222Z","isClosed":false},
		{"id":"1424758593366","title":"Application shutsdown frequently","createdAt":"2015-02-24T06:16:33.366Z","isClosed":false},
		{"id":"1424758602527","title":"Application denies access to valid users","createdAt":"2015-02-24T06:16:42.527Z","isClosed":false},
		{"id":"1424758602537","title":"Application unable to interact with the server","createdAt":"2015-02-24T06:16:42.527Z","isClosed":false}
	];


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("bugs/index", {list : bugs, msg : ''});
});

router.get('/new', function(req,res,next){
	res.render('bugs/new');
});

router.post('/toggle', function(req,res,next){
	var bug = bugs.filter(function(b) { return b.id === parseInt(req.body.id); })[0];
	if (bug){
		bug.isClosed = !bug.isClosed;
	}
	res.redirect('/bugs');
});
 
router.post('/new', function(req,res, next){
	bugs.push(req.body.newBug);
	res.render('bugs/index', {
		list : bugs,
		msg : "The new bug is successfully added"
	});
});

module.exports = router;
