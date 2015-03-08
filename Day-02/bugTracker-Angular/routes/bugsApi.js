var express = require('express');
var router = express.Router();


var bugs = [
		{"id":"1424758570222","title":"Login button is disabled","createdAt":"2015-02-24T06:16:10.222Z","isClosed":false},
		{"id":"1424758593366","title":"Application shutsdown frequently","createdAt":"2015-02-24T06:16:33.366Z","isClosed":false},
		{"id":"1424758602527","title":"Application denies access to valid users","createdAt":"2015-02-24T06:16:42.527Z","isClosed":false},
		{"id":"1424758602537","title":"Application unable to interact with the server","createdAt":"2015-02-24T06:16:42.527Z","isClosed":false}
	];

router.get('/', function(req,res, next){
	res.json({bugs : bugs});
});

module.exports = router;