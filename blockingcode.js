const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.write(`Home Page`);
  else if (req.url === `/about`) {
    res.write(`About Page`);
    //Going to write some blocking code(which means that it makes requests from other users to wait for a long time)
    for (let i = 0; i < 100000; i++) console.log(`Value of i: ${i}`);
  } else res.write(`Error page`);
  res.end();
});

//Try to observe the scenario here. The other requests will be processed only after the request that contains blocking code finishes completely, which is not at all good for app's performance. So, the asynchronous concept comes into picture in this case. Three tabs are opened in the browser to understand this concept and three different urls are passed according to the three conditional statements mentioned for validation purpose.

server.listen(3000, () => {
  console.log(`Server listening on port 3000.....`);
});

//Never ever forget to write res.end() at the end of the coe, else the server loads endlessly!!!!!! Very important

//Ultimate goal is to solve this problem, for which the solution is discussed later on here
