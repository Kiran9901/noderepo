//Try to understand what happens here. First priority for execution is given to the fucntions present in the call stack i.e, whatever function calls are present in the call stack, they first get executed, only then the fucntion calls if any in the message queue are taken into consideration. What happens is that the setTimeout generates a timer that counts down for specific amount of time and then returns the callback function to the call stack(function in the first argument is the callback function)

const first = () => console.log("first");

const second = () => console.log("second");

const third = () => console.log("third");

const exec = () => {
  console.log("First being executed.......");
  setTimeout(first, 3000);
  console.log("Second being executed........");
  setTimeout(second, 1000);
  console.log("Third being executed.....");
  setTimeout(third, 2000);
};

exec();
