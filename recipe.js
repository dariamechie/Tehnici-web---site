// Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

// Application
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());

app.use(require("./controller/RecipeController"));


// Starting the server
app.listen("3000", () =>
  console.log("Server started at: http://localhost:3000")
);