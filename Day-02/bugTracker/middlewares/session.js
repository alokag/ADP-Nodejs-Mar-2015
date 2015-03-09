var sessionStore = {};

function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};

module.exports = function(req, res, next){
	//find the sessionid from the request (from the cookies)
	var sessionId = req.cookies.sessionId;
	//if (no session id) then create a session id, allocate the session and write the id to the cookie
	if (!sessionId){
		sessionId = generateUUID();
		res.cookie("sessionId", sessionId);
		sessionStore[sessionId] = {};
	}
	//assign the session to req
	req.session = sessionStore[sessionId];
	next();
}