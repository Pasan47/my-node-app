const EventEmitter = require("events");

class TaskRunner extends EventEmitter {
  constructor() {
    super();
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  run() {
    this.tasks.forEach((task) => {
      task()
        .then(() => {
          this.emit("taskCompleted", task);
        })
        .catch((error) => {
          this.emit("taskError", task, error);
        });
    });
  }
}

// Usage
const runner = new TaskRunner();

runner.on("taskCompleted", (task) => {
  console.log(`Task ${task} completed`);
});

runner.on("taskError", (task, error) => {
  console.error(`Task ${task} failed:`, error);
});

runner.addTask(() => {
  return new Promise((resolve, reject) => {
    // Simulate a task
    setTimeout(() => {
      resolve("Task 1 completed");
    }, 1000);
  });
});

runner.run();
