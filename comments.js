// Create web server
// Run: node comments.js
// View at: http://localhost:3000/
// 
// 1.  Create a new Express application.
// 2.  Create a new route for GET requests to the root URL.
// 3.  Send the string 'Hello World!' as the response.
// 4.  Bind the application to TCP port 3000.
// 5.  Run the application.
// 6.  View the application in a browser at http://localhost:3000/.
// 7.  Press Ctrl+C to stop the application.
//

var express = require('express');
var app = express();

// 2.  Create a new route for GET requests to the root URL.
app.get('/', function(req, res) {
    res.send('Hello World!');
});

// 4.  Bind the application to TCP port 3000.
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});