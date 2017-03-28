"use strict";
exports.__esModule = true;
var express = require("express");
var errorHandler = require("errorhandler");
var http = require("http");
var path = require("path");
var socketIO = require("socket.io");
var httpPort = normalisePort(process.env.port || 8080);
var app = express();
app.set("port", httpPort);
// Add static paths
app.use(express.static(path.join(__dirname, "../../dist")));
// Catch 404 and forward to error handler
app.use(function (err, req, res, next) {
    err.status = 404;
    next(err);
});
// Error handling
if (app.get("env") == "development") {
    app.use(errorHandler());
}
// Create routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});
var httpServer = http.createServer(app);
var io = socketIO(httpServer);
httpServer.listen(httpPort, onListening);
/**
 * Normalise a port into a number, string, or false.
 */
function normalisePort(val) {
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
io.on("connection", function (socket) {
    console.log("User '" + socket.id + "' connected.");
    socket.emit("hello-client");
    socket.on("hello-server", function () {
        console.log("User '" + socket.id + "' said hello.");
    });
    socket.on("disconnect", function () {
        console.log("User '" + socket.id + "' disconnected.");
    });
});
//# sourceMappingURL=app.js.map