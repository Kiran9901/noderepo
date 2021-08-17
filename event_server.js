const http = require("http");

const server_request = http.createServer();
server_request.on("request", (req, res) => {
  res.write(`Hello from local server`);
  res.end();
}); //Here, instead of using the createServer method, .on function is used that specifically handles the request that is passed into the on function as an argument

server_request.listen(3000, () => {
  console.log(`Server listening on port 3000`);
}); //Order of placing callback function does matters, should follow the convention of writing callback function after all the arguments.
