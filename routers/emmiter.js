const EventEmitter = require("events");
const myEmmiter = new EventEmitter();
myEmmiter.on("message", (data) => {
  console.log("Received message:", data);
});
myEmmiter.emit("message", "Hello World");
