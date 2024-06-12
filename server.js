const express = require("express");
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Configure Nunjucks
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

//Import the routers
const homeRouter = require("./routes/home");
const signinRouter = require("./routes/auth").default;

//Load all the static files
app.use(express.static("public"));

//Parsing the forms
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to html
app.set("view engine", "html");

// Responds and routes the http requests
app.use("/", homeRouter);
app.use("/auth", signinRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
