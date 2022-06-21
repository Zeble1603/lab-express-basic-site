// Express server handling requests and responses
const express = require("express");
const app = express();
const port = 8008;
 
// Make everything inside of public/ available
app.use(express.static('public'));
 
// our first Route:
app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'))
 
// about route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));
 
// works route:
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

// photos route:
app.get('/photos', (request, response, next) => response.sendFile(__dirname + '/views/photos.html'));

// Server Started
app.listen(port, () => console.log(`My first app listening on port ${port}!`));
