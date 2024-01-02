const http = require('http');
const fs = require('fs');

const PORT = 8080;
const filePath ='./dane.txt';

let dane = '';

const rStream = fs.createReadStream(filePath);

const server = http.createServer(
    (req,res)=>{
        res.writeHead(
            200,
            {'Content-Type': 'text/plain'}
        );

        rStream.on(
            'data',
            (chunk)=>{
                dane+=chunk;
            }
        )
        res.write(dane);
        res.end()
    }
)

server.listen(PORT);