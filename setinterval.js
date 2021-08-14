setInterval(() => {
  console.log(`This executes many times!`);
}, 2000);

//The callback function in the setInterval gets executed, for every time interval of two seconds

console.log(
  `This executes first, though written after setInterval, as setInterval  is an asynchronous function`
);
