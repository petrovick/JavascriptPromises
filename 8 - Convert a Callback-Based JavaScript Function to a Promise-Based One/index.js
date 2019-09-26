const fs = require('fs');
const util = require('util')

function readFile(path, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (error, contents) => {
      if(error) {
        reject(error);
      }
      else  {
        resolve(contents)
      }

    });
  });
}
//const readFile = util.promisify(fs.readFile);

readFile(__filename, "utf8")
  .then(contents => {
    console.log(contents)
  }, error => {
    console.log(error)
  })



/*Outro método*/
/*
const util = require('util')

const readFile = util.promisify(fs.readFile);

readFile(__filename, "utf8")
  .then(contents => {
    console.log(contents)
  }, error => {
    console.log(error)
  })
*/