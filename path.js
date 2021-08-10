const path = require("path");
console.log(path.sep); //Prints out the path seperator of the corresponding environment

const filePath = path.join("images", "cricketers", "dhoni.jpeg"); //Used to join the path of the location of a file or folder with the path seperator of that particular environment
console.log(filePath);

const base = path.basename(filePath); //Prints out the basename i.e, filename of the particular file, ignoring the rest of the path of the file location
console.log(base);

const absolute_path = path.resolve(
  __dirname,
  "images",
  "cricketers",
  "dhoni.jpeg"
); //Prints out the absolute path i.e, from the root level of the directory system of the corresponding OS.

console.log(absolute_path);
