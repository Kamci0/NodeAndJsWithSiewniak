const fs = require('fs');

const fileName = 'test.txt';
const rootPath = __dirname + '/' + fileName;
const fileContent = "Siema jak tam pietruszka";

fs.writeFile(rootPath, fileContent,(err)=>{
    if(err) throw err;
})

fs.readFile(rootPath, 'utf8', (err, data)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log(data.toString())
    }
})

fs.stat(
    fileName,
    (err, stats) => {
        if (err) {
            return console.error(err);
        }else{
            if (stats.isFile()) {
                console.log("Rozmiar pliku: ", stats.size);
            } else {
                console.log("Badany obiekt nie jest plikiem!");
            }
        }
    }
);