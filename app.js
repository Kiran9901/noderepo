// In node, we have to kinds of execution environments i.e, REPL(REad, evaluate, print, loop similar to python interpretor shell, and the second one e have is Node CLI, which is the application development execution environment)

//GLOBALS - AS WE DON'T HAVE WINDOW OBJECT IN NODE

// __dirname - path to current directory
//__filename - file name
// require - function to use modules(CommonJS)
// module - info about current module(file)
// process - info about where the program is being executed

//Note that every file in node is a module. In modules, the data is encapsulated safely
const experience = 2;
if (experience >= 2)
  console.log(`Welcome to the node tutorial, as you are experienced enough`);
else
  console.log(
    `You're not experienced enough, first go and learn coding fundamentals`
  );
//To execute the app.js, go to terminal and type the following command:
// node app.js(entry level file in node, like the index.html in web pages)

//Modules in node
/* It's difficult to bulid large complex applications and to build them in a single file, so e break them into modules or different JS Files, to improve code reusability*/

const Message = require("./functions"); //This gives a JSON object having same key and value pairs, which is the name of the variable being exported. To access the actual function from the message, use message.printMsg()

console.log(Message);
const names = require("./names"); //To know the exports inside the names, simply print the whole object to know about it.
console.log(names.name1);
console.log(names.name2);

customname = "Sai Kiran Parimi";
console.log(__dirname); //Gives the path of the directory the file is located in

console.log(Message.printMsg(names.customname1));
console.log(Message.printMsg(names.customname2));
//In the output, we are getting undefined return type, as the printMsg declared in the functions module is a functionvariable,
// the value returned to that particular variable is nothing, so undefined is returned to it, as it is exported everytime, so as the same reflected everywhere. We are only getting this only once, as the control goes into setInterval function, which takes care of the rest.
