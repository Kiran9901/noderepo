//What is event-driven programming
//In node.js, this is one of the most commonly used programming paradigm. This is nothing but as the progam gets executed, it should also focus on the user events that are happening on the browser side, such as button click, hovering on the link and the list goes on...
//It is evry crucial to handle such user events properly for a good web application.
//Used heavily in nodejs
//Event Driven Programming can also be done on server side, particularly possible in nodejs, thus used heavily.
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log(`Response data received successfully`);
}); //Denotes the action to be carried out when the emitter is invoked by .emit call.

customEmitter.on("response", (name, age) => {
  console.log(`Some other data received parallely!!!`);
  console.log(`Name: ${name} \n Age: ${age}`); //Observe that here though single emit function is called to invoke the response, both the .on instances of response are called in the order of execution accordingly.
});

customEmitter.on("response", (name, age, gender) => {
  console.log(`Some other data received parallely!!!`);
  console.log(`Name: ${name} \n Age: ${age} \n Gender: ${gender}`); //Observe that here though single emit function is called to invoke the response, both the .on instances of response are called in the order of execution accordingly.
});

// customEmitter.emit("response"); //Used to emit response i.e, invokes the on function, provided the string passed as first argument should match with both on and emit functions of the EventEmitter class. As we have response as the string in emit function, we design .on function for the response event accordingly.

//on is the listening portion and emit is the emitting portion. As said above, order of execution definitely matters. Firstly the event has to be listened using the .on function and only then the event has to be emitted, else resulting in uneven flow of execution of the script.

//One can even pass extra arguments, and to the corresponding extra arguments and those have to be properly addressed in the function parameters. Check out the below example:

customEmitter.emit("response", "Kiran", 19); //Here, node looks for listener that has accepts two arguments in the callback function. Else, it would just ignore and execute the lines present in the callback function. Its optional for the node developer whether to use the passed arguments or not.

//Also notice the fact that the event data is passed to all listeners by the emitters, and it is left to the listeners how to handle the emitted event.
