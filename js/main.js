$(document).ready(function() 
{
	var authCode = window.location.search.replace("?","");
	console.log(authCode);

	if (authCode !== "")
	{
		//getHGToken(authCode);
	}
});

$("form").submit(function(event) 
{
	console.log("plop");
	event.preventDefault();
});
 

var getHGToken = function (authCode)
{
	var requestData = {
		grant_type: 'authorization_code',
		code: authCode,
		client_id: '57d88846acd74d86bc34a2e2bdb29189',
		client_secret : '452649e2671241bb8826c12521acfe2a',
		redirect_uri: 'http://127.0.0.1:3000/getToken'
	}

	$.ajax({
		url: 'https://runkeeper.com/apps/token',
		type: 'POST',
		dataType: 'json',
		data: requestData
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
};