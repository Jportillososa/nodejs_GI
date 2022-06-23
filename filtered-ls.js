const fs = require('fs');

//path method

const path = require('path');

const directory = process.argv[2];
const extension = `.${process.argv[3]}`;

fs.readdir(directory, (err, list) => {
   list.forEach(file => {
       if (path.extname(file) === extension){
           console.log(file);
       }
   })
})

//list is an array method -- if you console log you get an array