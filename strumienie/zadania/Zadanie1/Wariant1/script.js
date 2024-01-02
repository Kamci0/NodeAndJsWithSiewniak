const fs = require('fs');

const filepath = '../dane.txt';

fs.readFile(filepath, 'utf8', (err,data)=>{
    try{
        if(err) throw 'Błąd w otwarciu pliku';
        console.log(data.toString());
    }
    catch(err){
        console.log(err);
    }
})