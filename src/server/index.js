// Server setup
const app = require('./app');
const http = require('http');

// Put api on
const port = process.env.PORT || 3030;
const name = process.env.APP_NAME || 'backend';


// Begins running app on server
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`${name} is now running on ${port}`);
});
