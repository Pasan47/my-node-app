const fs = require("fs");
const path = require("path");

function createDirectoryStructure(rootDirectory, structure) {
  if (!fs.existsSync(rootDirectory)) {
    fs.mkdirSync(rootDirectory, { recursive: true });
  }
  for (const [key, value] of Object.entries(structure)) {
    const fullPath = path.join(rootDirectory, key);
    if (typeof value === "string") {
      fs.writeFileSync(fullPath, "");
    } else {
      createDirectoryStructure(fullPath, value);
    }
  }
}

// Get user input for the root directory and the desired structure
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the root directory: ", (rootDir) => {
  rl.question("Enter the directory structure (JSON format): ", (structure) => {
    try {
      const parsedStructure = JSON.parse(structure);
      createDirectoryStructure(rootDir, parsedStructure);
      console.log("Directory structure created successfully.");
    } catch (error) {
      console.error("Invalid JSON structure:", error);
    }
    rl.close();
  });
});
{
  "folder1": {
    "file1.txt": "",
    "ile2.txt": "",
    "subfolder1": {
      "file3.txt": ""
    }
  },
  "folder2": {
    "file4.txt": ""
  }
}