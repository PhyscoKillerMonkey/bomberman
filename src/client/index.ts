import { Game } from './game';

declare var io: SocketIOClientStatic;

// Create the socket.io object
let socket = io();

socket.on("hello-client", function() {
  console.log("Server said hello");
  socket.emit("hello-server");
});

let game = new Game(480, 360);
game.start();