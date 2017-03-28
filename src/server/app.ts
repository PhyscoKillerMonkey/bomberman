import express = require("express");
import errorHandler = require("errorhandler");
import http = require("http");
import path = require("path");
import socketIO = require("socket.io");

let httpPort = normalisePort(process.env.port || 8080);
let app = express();
app.set("port", httpPort);

// Add static paths
app.use(express.static(path.join(__dirname, "../../dist")));

// Catch 404 and forward to error handler
app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  err.status = 404;
  next(err);
});

// Error handling
if (app.get("env") == "development") {
  app.use(errorHandler());
}

// Create routes
app.get("/", function(req: express.Request, res: express.Response) {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

let httpServer = http.createServer(app);
let io = socketIO(httpServer);
httpServer.listen(httpPort, onListening);

/**
 * Normalise a port into a number, string, or false.
 */
function normalisePort(val: any) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  var addr = httpServer.address();
  var bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + addr.port;
  console.log("Listening on " + bind);
}



// Do socket.io stuffs
io.on("connection", function(socket: SocketIO.Socket) {
  console.log("User '" + socket.id + "' connected.");

  socket.emit("hello-client");

  socket.on("hello-server", function() {
    console.log("User '" + socket.id + "' said hello.");
  });

  socket.on("disconnect", function() {
    console.log("User '" + socket.id + "' disconnected.");
  });
});