//Now the ultimate task is to implement the same functionality of reading from and writing to files in case of asynchronous fs that doesn't have any return value. This is somewhat complex, but ultimately helps to understand the scope concept in JS.
const { readFile, writeFile } = require("fs");
readFile("./images/cricketers/first.txt", "utf-8", (err, result) => {
  if (err) console.log(err);
  //console.log(result)//To print out the contents of the resultant file content if no errors
  //return result; this doesn't work, as the callback function is restricted to the scope of the callback function but not accessible outside it.
  //So, the below approach is smart way to carry out the fucntionality.
  const first = result;
  readFile("./images/cricketers/second.txt", "utf-8", (err, result) => {
    if (err) console.log(err);
    const second = result;
    writeFile(
      "./images/cricketers/third_async.txt",
      `Here's the content of 1st and second file in combination: ${first}\n${second}`,
      (err, res) => {
        if (err) console.log(err);
        console.log(res);
      } //Here, one can give their own names to arguments mentioned in the callback function, but for understandability, err and res are generally used. But the first arg is realted to error and the second one is realted to successful execution.
    );
  });
}); //if utf-8 argument is not passed, the contnts of the string cannot be accessed properly, displayed in the form of buffer.

//executing this module definitely gives you an undefined object as a return type for sure, as readFile returns nothing but if you uncomment below line of code, some output is displayed, as the moudule as a whole being executed means that every line of code is also being executed, still the undefined is being
//console.log("This is fs-async demonstration");

//Synchronous and asynchronous for the sake of understanding, just for reference

// Synchronous JavaScript: As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed.

// Asynchronous JavaScript: Asynchronous code allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one. This may not look like a big problem but when you see it in a bigger picture you realize that it may lead to delaying the User Interface.

//Why async is preferred over sync?
//Ans: as in case of async, the server receives a task to be done in form of a request, offloads the task to other thread so that it seperatley gets executed, while giving chance for the server to serve another user's request meanwhile.
//As in case of sync, everything gets executed in order starting from initial line to the final line, which makes the server to take more time to get tasks done, thus making it inefficient to serve multiple requests form multiple users.
