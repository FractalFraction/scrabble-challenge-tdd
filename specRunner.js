// Loop over all spec.js files in the spec directory
const path = require('path');
const fs = require('fs');

const filePath = "/Users/cmg18/Digital Futures/Challenges/scrabble-challenge-tdd/specRunner.js";

const dirPath = path.join(__dirname,'specs');

fs.readdir(dirPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(`Read ${file}`);
        require(`${dirPath}/${file}`);
    });
});
