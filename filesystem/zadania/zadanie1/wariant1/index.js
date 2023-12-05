const fs = require('fs');

const filename = "data.dat";
const filePath = './data/'+ filename;
const data = "ZSEII";

fs.mkdir('./data', (err)=>{
    if(err){
        return console.error(err);
    }
})

fs.open(
    filePath,
    'w+',
    (err, fd)=>{
        if (err) {
            return console.error(err);
        }
        fs.write(
            fd,
            data,
            (err)=>{
                if (err) {
                    return console.error(err.message);
                }
            } 
        )
        
        fs.read(
            fd,
            'utf8',
            (err, data)=>{
                if(err){
                    return console.log(err);
                }else{
                    console.log("Siema");
                    console.log(data.toString());
                }
            }
        )
    }
)

fs.readFile(
    filePath,
    'utf8',
    (err, data)=>{
        if(err){
            return console.log(err);
        }else{
            console.log("Siema 2");
            console.log(data);
        }
    }
)

