const { readFile, writeFile } = require("fs").promises;

const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

//Hard coded version of promise
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) reject(err);
//       else resolve(data);
//     });
//   });
// };

const execute = async () => {
  //async makes the function asynchronous, thus avoiding blocking code
  const first = await readFile("./images/cricketers/first.txt", "utf8");
  //await makes sure that the result is returned properly after completely finishing the readfile operation. Same goes with the others too.
  const second = await readFile("./images/cricketers/second.txt", "utf8");
  await writeFile(
    "./images/cricketers/third_async_await",
    `This is cool: ${first} which is merged with ${second}`
  ); //We can even have a flag as a third argument like this: {flag: 'a'}, to write to a file in append mode
  console.log(first, second);
};

//As result is an async function, it needs to be invoked.

execute();
