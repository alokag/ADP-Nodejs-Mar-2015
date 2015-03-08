var express = require('express');
var router = express.Router();

var bugs = [
	"Login button is disabled",
	"Application crashes frequently",
	"Becomes single threaded often"
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("bugs/index", {list : bugs});
});

module.exports = router;