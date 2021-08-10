const { readFileSync, writeFileSync } = require("fs");

const firstFileContent = readFileSync("images/cricketers/first.txt", "utf-8");
const secondFileContent = readFileSync("images/cricketers/second.txt", "utf-8");
console.log(firstFileContent + "\n" + secondFileContent);

const thirdFileContent = writeFileSync(
  "images/cricketers/third_sync.txt",
  `Here is the result of addition of contents of first nad second files: ${firstFileContent} ${secondFileContent}`,
  { flag: "a" }
);
//Here, the flag is a JSON Object that can be set to 'w'(write) or 'a'(append)

//Here, a third text file is created as it is not present, so that it will be created and then the contents of the first and second files are written to that text file. If the file is present, then the contents of the file are overrided

//Here, we have two flavors of readfile fucntionality i.e, readFile and readFileSync. readFile has an additional argument called a callback function, that gets executed when the operation is successful
