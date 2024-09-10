const EventEmitter = require("events");
const myEmmier = new EventEmitter();
class Logger extends EventEmitter {
  log(msg) {
    this.emit("messageLogged", msg);
  }
}

module.exports = Logger;
