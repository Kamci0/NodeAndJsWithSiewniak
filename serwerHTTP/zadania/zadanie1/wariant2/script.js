const http = require('http');
const fs = require('fs');

const filename = "index.html";
const PORT = 8080; 

http.createServer((req, res)=>{

    fs.readFile(
        filename,
        'utf8',
        (err, data)=>{
            res.writeHead(
                200,
                "Sukces",
                {'Content-Type': 'text/html'}
            );
            res.write(data);
        
            res.end("Koniec");
        }
    )
    
}).listen(PORT);