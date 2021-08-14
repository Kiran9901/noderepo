const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

const first = getText("./images/cricketers/first.txt").then(
  (data) => console.log(data),
  (err) => console.log(err)
);
