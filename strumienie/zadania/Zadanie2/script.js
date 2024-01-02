const fs = require('fs');

const inputFilePath = './dane1.txt';
const outputFilePath = './dane2.txt';

const rStream = fs.createReadStream(inputFilePath);
const wStream = fs.createWriteStream(outputFilePath);

rStream.on(
    'data',
    (chunk)=>{
        console.log(chunk.toString())
        wStream.write(chunk)
    }
)
