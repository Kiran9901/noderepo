//All the previous code that was used to be here is shifted to intro.js
// If wanted to execute the content moved to intro module, just execute the following command that is commented
//const intro = require("./intro.js");
//All the OS info has been migrated to user info. To know about os, execute the following command
//const aboutOS = require("./osinfo.js");
//All the path demo has been migrated to path.js. To know abpout path demo, execute the following line of code
// const pathdemo = require("./path"); //You can metion path or path.js, both are correct
// console.log(require("fs")); //Just to know about teh contents present in the fs module, which stands for filesync module
const { readFileSync, writeFileSync } = require("fs");

const firstFileContent = readFileSync("images/cricketers/first.txt", "utf-8");
const secondFileContent = readFileSync("images/cricketers/second.txt", "utf-8");
console.log(firstFileContent + "\n" + secondFileContent);

const thirdFileContent = writeFileSync(
  "images/cricketers/third.txt",
  `Here is the result of addition of contents of first nad second files: ${firstFileContent} ${secondFileContent}`,
  { flag: "a" }
);
//Here, the flag is a JSON Object that can be set to 'w'(write) or 'a'(append)

//Here, a third text file is created as it is not present, so that it will be created and then the contents of the first and second files are written to that text file. If the file is present, then the contents of the file are overrided

//Here, we have two flavors of readfile fucntionality i.e, readFile and readFileSync. readFile has an additional argument called a callback function, that gets executed when the operation is successful
