const http = require('http');
const fs = require('fs').promises;
const { resolve } = require('path');

const PORT = 8100;
const car1_filename = 'samochod1.json';
const car2_filename = 'samochod2.json';
const car3_filename = 'samochod3.json';


const server = http.createServer((req, res) => {

    
    if (req.url=="/"){
        res.writeHead(
            200,
            {'Content-Type': 'text/html'}
        );
        res.write("<p>Wpisac w url '/1', '/2' lub '/3'</p>");
        res.end();
    }
    else
    if(req.url=="/1"){

    const promise = fs.readFile(
        car1_filename,
    )

    promise
        .then((data)=>{
            res.writeHead(
                200,
                {'Content-Type': 'application/json'}
            );
            res.write(data);
            res.end();
        })
        .catch((err)=>{
            res.writeHead("500");
            res.write(err.message)
            res.end();
            return;
        })
    }else
    if (req.url=="/2"){

    const promise = fs.readFile(
        car2_filename,
        'utf8',
    )
    
    promise
        .then((data)=>{
            res.writeHead(
                200,
                {'Content-Type': 'application/json'}
            );
            res.write(data);
            res.end();
        })
        .catch((err)=>{
            res.writeHead("500");
            res.write(err.message)
            res.end();
            return;
        })

    }else
    if (req.url=="/3"){

    const promise = fs.readFile(
        car3_filename,
        'utf8',
    )
    
    promise
        .then((data)=>{
            res.writeHead(
                200,
                {'Content-Type': 'application/json'}
            );
            res.write(data);
            res.end();
        })
        .catch((err)=>{
            res.writeHead("500");
            res.write(err.message)
            res.end();
            return;
        })
    }
    else{
        res.writeHead("500");
        res.write("Nie ma takiej podstrony")
        res.end();
    }
});

server.listen(PORT, 'localhost', () => {
    console.log(`http://localhost:${PORT}`);
});