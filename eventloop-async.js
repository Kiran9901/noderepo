//Consider the fs-async example, where readFile operation is executed that is async operation, observe that the first task is started, then readFile function is executed, where the callback function is kept aside, executing remaining functions in the call stack and then finally executing the contents of the callback function, i.e console.log(result) is finally printed onto the screen.

const { readFile } = require("fs");

console.log("Starting the first task");

readFile("./images/cricketers/eventloop.txt", "utf-8", (err, result) => {
  if (err) console.log(err);
  console.log(result);
  console.log("Completed first task");
});
console.log("Starting next task");
