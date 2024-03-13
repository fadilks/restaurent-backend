// 1. Import json-server
const jsonServer = require('json-server');

// 2. Create a server application using jsonServer
const restServer = jsonServer.create();

// 3. Setup path for db.json
const router = jsonServer.router('db.json');

// 4. Return middleware
const middleware = jsonServer.defaults();

// 5. Set port number
const port = 3001;

// Use middleware and router in restServer
restServer.use(middleware);
restServer.use(router);

// Start the server
restServer.listen(port, () => {
    console.log("Restaurant server listening on port " + port);
});
