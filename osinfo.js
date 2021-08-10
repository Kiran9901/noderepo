const os = require("os");
//Here it doesn't print out any content, as per the action that require function does, as there are no output statements inside the OS module, just it contains some mo0dule exports(i.e, some variables that are exported by the module for usability purpose)

//Knowing about the user
const user = os.userInfo();
console.log(user);

//Method to obtain the system's uptime. System's uptime is the operational time of the system since login, similar to clock

console.log(`The system's uptime is: ${os.uptime()} seconds`);

//Object that returns complete info of the OS that is beign used in the system

const OSInfo = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(OSInfo);
