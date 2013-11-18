
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var hg = require('./routes/hg');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/getToken', hg.getToken);

/*
// Set up your client's options
var options = exports.options = {

    // Client ID (Required): 
    // This value is the OAuth 2.0 client ID for your application.  
    client_id : "57d88846acd74d86bc34a2e2bdb29189",

    // Client Secret (Required):  
    // This value is the OAuth 2.0 shared secret for your application.   
    client_secret : "452649e2671241bb8826c12521acfe2a",

    // Authorization URL (Optional, default will work for most apps):
    // This is the URL to which your application should redirect the user in order to authorize access to his or her RunKeeper account.   
    auth_url : "https://runkeeper.com/apps/authorize",

    // Access Token URL (Optional, default will work for most apps):
    // This is the URL at which your application can convert an authorization code to an access token. 
    access_token_url : "https://runkeeper.com/apps/token",

    // Redirect URI (Optional but defaults to null, which means your app won't be able to use the getNewToken method):
    // This is the URL that RK sends user to after successful auth  
    // URI naming based on Runkeeper convention 
    redirect_uri : "http://localhost:3000",

    // Access Token (Optional, defaults to null):
    // When doing Client API Calls on behalf of a specific user (and not getting a new Access Token for the first time), set the user's Access Token here.
    access_token : "< access token >",

    // API Domain (Optional, default will work for most apps):
    // This is the FQDN (Fully qualified domain name) that is used in making API calls
    api_domain : "api.runkeeper.com"
};

// Require RunKeeper.js
var runkeeper = require('runkeeper-js');

// Create a Client
var client = new runkeeper.HealthGraph(options);


// Get a new Access Token with your Client
client.getNewToken("ea0fd1acfcbe4898942d8accdc6b7bb4", function(err, access_token) {

    // If an error occurred during the Access Token request, handle it. For the example, we'll just output it and return false.
    if(err) { console.log(err); return false; }

    // Set the client's Access Token. Any future API Calls will be performed using the authorized user's access token. 
    client.access_token = access_token;
    console.log(access_token);

    // Usually, you'll want to store the access_token for later use so that you can set it upon initialization of the Client

    // Example: Get user's Profile information
    client.profile(function(err, reply) {
        if(err) { console.log(err); }

        // Do whatever you need with the API's reply.
        console.log(reply);
    });
})*/


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


