// Retrieving System Information:
const os = require("os");

console.log("Operating System:", os.platform());
console.log("Architecture:", os.arch());
console.log("Release:", os.release());
console.log("Hostname:", os.hostname());

// Getting CPU Information:
console.log("Number of CPUs:", os.cpus().length);
console.log("CPU Model:", os.cpus()[0].model);
console.log("CPU Speed:", os.cpus()[0].speed);

//  Checking Memory Usage:

console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log(
  "Memory Usage:",
  (os.totalmem() - os.freemem()) / 1024 / 1024 + " MB"
);
//  Obtaining Network Interfaces:
console.log("Network Interfaces:", os.networkInterfaces());
// Finding Uptime:
console.log("Uptime:", os.uptime() + " seconds");
// Getting Temporary Directory Path:
console.log("Temporary Directory:", os.tmpdir());
// Determining Home Directory:
console.log("Home Directory:", os.homedir());
// Checking Environment Variables:
console.log("Environment Variables:", process.env);
// Creating a Temporary File:
const fs = require("fs");

const tmpFile = os.tmpdir() + "/temp.txt";
fs.writeFileSync(tmpFile, "This is a temporary file.");
console.log("Temporary File Created:", tmpFile);

// Getting Current User Information:
console.log("Current User:", os.userInfo().username);
