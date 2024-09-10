const path = require("path");
// joining paths
const joinedPath = path.join("directory", "file.txt");
console.log(joinedPath); // Output: directory/file.txt
// Resolving absolute paths
const absolutePath = path.resolve("relative/path", "file.js");
console.log(absolutePath); // Output: /path/to/your/project/relative/path/file.js (depending on your system)
// Getting directory name
const dirname = path.dirname("/path/to/file.txt");
console.log(dirname); // Output: /path/to
// getting the basename
const basename = path.basename("/path/to/file.txt");
console.log(basename); // Output: file.txt
// getting the file extension
const extname = path.extname("/path/to/file.txt");
console.log(extname); // Output: .txt
// Normalizing paths
const normalizedPath = path.normalize("/path/to/../file.txt");
console.log(normalizedPath); // Output: /path/to/file.txt
// checking if a path is absolute
const isAbsolute = path.isAbsolute("/path/to/file.txt");
console.log(isAbsolute); // Output: true
// checking if a path is relative
const isRelative = path.isRelative("/relative/path/file.txt");
console.log(isRelative); // Output: true
//Creating temporary files:
const tmp = require("tmp");

tmp.file((err, path, fd, cleanupCallback) => {
  if (err) throw err;

  // Use the temporary file path
  console.log(path);

  // Clean up the temporary file when done
  cleanupCallback();
});

// Creating temporary directories:
tmp.dir((err, path, cleanupCallback) => {
  if (err) throw err;

  // Use the temporary directory path
  console.log(path);

  // Clean up the temporary directory when done
  cleanupCallback();
});
