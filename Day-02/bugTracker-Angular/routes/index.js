var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req,res,next){
	res.write("<h1>All about Express</h1>");
//	res.end();
	next();
})

module.exports = router;
