var https = require("https");

exports.getToken = function(req, res)
{
	var authCode = req.query.code;

	 var request_params = {
        grant_type: "authorization_code",
        code: authCode,
        client_id: "57d88846acd74d86bc34a2e2bdb29189",
        client_secret: "452649e2671241bb8826c12521acfe2a",
        redirect_uri: "http://127.0.0.1:3000/getToken"
    };
    
    console.log(request_params);

    var paramlist  = [];
    for (pk in request_params) {
        paramlist.push(pk + "=" + request_params[pk]);
    };
    var body_string = paramlist.join("&");
    
    var request_details = {  
        method: "POST",
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        uri: "https://runkeeper.com/apps/token",
        body: body_string
    };

    request_details.rejectUnauthorized = false;
	request_details.agent = new https.Agent( request_details );

    var hgReq = https.request(request_details, function(error, response, body) 
        {
        	console.log(JSON.parse(body));
    	});
	hgReq.on('error', function(error) {
	  console.log(error);
	});

	hgReq.end();

    res.render('index', { title: 'trailviz' });


};