//GLOBALS - AS WE DON'T HAVE WINDOW OBJECT IN NODE

// __dirname - path to current directory
//__filename - file name
// require - function to use modules(CommonJS)
// module - info about current module(file)
// process - info about where the program is being executed

console.log(__dirname); //Gives the path of the directory the file is located in
const Message = (msg) => {
  setInterval(() => {
    console.log(`${msg}`);
  }, 1000);
};

Message("This is Kiran");
//setInterval() function is used to execute a task, taking an additional argument which sets the time interval in ms of which the task should be repeatedly executed. Observe that it is wrapped in curly braces, which means a function variable is declared(inline function) with msg as argument passed into. Message(arg) is used to call that function variable.
// To execute, one can even enter "node intro"
//The above function repeatedly prints helloworld
