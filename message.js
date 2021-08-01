//GLOBALS - AS WE DON'T HAVE WINDOW OBJECT IN NODE

// __dirname - path to current directory
//__filename - file name
// require - function to use modules(CommonJS)
// module - info about current module(file)
// process - info about where the program is being executed

//Note that every file in node is a module. In modules, the data is encapsulated safely

console.log(__dirname); //Gives the path of the directory the file is located in
const Message = (msg) => {
  setInterval(() => {
    console.log(`This is ${msg}`);
  }, 1000);
};

const customname1 = "Charan";
const customname2 = "Kiran";
const customname3 = "Sai";

Message("Kiran");
Message(customname);
//setInterval() function is used to execute a task, taking an additional argument which sets the time interval in ms of which the task should be repeatedly executed. Observe that it is wrapped in curly braces, which means a function variable is declared(inline function) with msg as argument passed into. Message(arg) is used to call that function variable.
// To execute, one can even enter "node intro"
//The above function repeatedly prints the msg that is passed into.
