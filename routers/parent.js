const EventEmitter = require("events");

const Logger = require("./child");
const logger = new Logger();
logger.on("messageLogged", (args) => {
  console.log("Listener called", args);
});
logger.log("hello");
