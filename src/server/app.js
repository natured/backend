const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const database = require('../db');
const routes = require('../routes');
const middleware = require('../middleware');

// Create application
const app = express();

// Connect to database
database.connect();

// Tooling for incoming requests (cross-origin, parsing JSON, etc.)
app.use(middleware.favicon);
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));


// Register routes with app
routes.map(({ path, handler }) => {
  app.use(path, handler);
});

// Handles errors when not found
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

// Export the app
module.exports = app;
