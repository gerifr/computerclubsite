const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = 3000;

const homeRoute = require('./routes/home')


// Configure Nunjucks
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

// Set the view engine to html
app.set('view engine', 'html');

app.use('/', homeRoute)

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
