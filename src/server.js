import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import http from "http";

const server = http.createServer(app);
import { Server } from "socket.io";

const io = new Server(server);
io.on("connection", (socket) => {
  console.log(`Socket Connected with the id: ${socket.id}`);
});

server.listen(PORT, () =>
  console.log(`The server is up and running on port: ${PORT}...`)
);
