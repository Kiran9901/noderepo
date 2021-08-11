const http = require("http");
const server = http
  .createServer((req, res) => {
    //console.log(req); //When we try to output this, a giant json object is printed onto the console. So we try to access only the required properties.
    if (req.url === "/") {
      res.write(`Welcome to my server's home page:)`);
    } else if (req.url === "/about") {
      res.write(
        `Our server was just built on our local machine. Seems cool right:<)`
      ); //If we use if instead of else if construct, it just appends the response instead of overwriting the response on receiving the client's request
    } else res.write(`<p>Resource not found!<p><a href = '/'>Back to Home</a>`); //If res.end() is not mentioned, server still continues to load. So, the res.end() denotes the end of the response.
    res.end(); //Only put res.end() at the end, otherwise give you many errors. Don't ignore this
  })
  .listen(3000);
//In the response string, note that only h1 and p tags work for html formatting. Other text tags won't work
