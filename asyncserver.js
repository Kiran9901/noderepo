const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(`Request Invoked`);
  res.end(`Hello world`);
});
server.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});

//Observe on the output, when we hit reload, we get request to be invoked twio times, as when we hit the reload, a request is sent to the server, and after reload too, a parallel request is sent again to the server. This is the reason for one hit of reload, console log is executed for two times. Please do understand this
