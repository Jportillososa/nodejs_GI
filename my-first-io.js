
const fs = require('fs'); // this is a native (file system) module (fs offers all the methods available)

const buffer = fs.readFileSync(process.argv[2]); //this is a buffer objec(nodes way of storing data)

console.log(buffer.toString().split('\n').length - 1);
// \n produces an array

console.log(buffer.toString())
// a series of numbers // but a whole bunch of words when turned to string