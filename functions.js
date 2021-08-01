const printMsg = (msg) => {
  setInterval(() => {
    console.log(`This is ${msg}`);
  }, 1000);
};
//setInterval() function is used to execute a task, taking an additional argument which sets the time interval in ms of which the task should be repeatedly executed. Observe that it is wrapped in curly braces, which means a function variable is declared(inline function) with msg as argument passed into. Message(arg) is used to call that function variable.
// To execute, one can even enter "node intro"
//The above function repeatedly prints the msg that is passed into.

//Semicolons can be ignored in node, but a good practice to continue using it.

//module.exports.printMsg = {printMsg} is simpler one, when used to export multiple variables at a time

module.exports.printMsg = printMsg;
