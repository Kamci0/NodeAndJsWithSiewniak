const fs = require('fs');

const filePath = '../dane.txt';

const rStream = fs.createReadStream(filePath);

rStream.on(
    'data',
    (chunk)=>{
        console.log(`${chunk}\n`);
    }
)

rStream.on(
    'end',
    ()=>{
        console.log("Koniec odczytu danych")
    }
)