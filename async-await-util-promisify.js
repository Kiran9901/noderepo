const { readFile, writeFile } = require("fs");

const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

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
  const first = await readFilePromise("./images/cricketers/first.txt", "utf8");
  const second = await readFilePromise(
    "./images/cricketers/second.txt",
    "utf8"
  );
  await writeFilePromise(
    "./images/cricketers/third_async_await",
    `This is cool: ${first} merged with ${second}`
  );
  console.log(first, second);
};

//As result is an async function, it needs to be invoked.

execute();
