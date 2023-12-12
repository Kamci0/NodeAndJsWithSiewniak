const http = require('http');
const fs = require('fs');

const PORT = 8110;
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
    }else
    if(req.url=="/1"){
        fs.readFile(
            car1_filename,
            'utf8',
            async (err, data)=>{
                if(err){
                    await res.writeHead("500");
                    await res.write(err.message)
                    await res.end();
                    return;
                }
                await res.writeHead(
                    200,
                    {'Content-Type': 'application/json'}
                );
        
                await res.write(data);
                await res.end();
            }
        )
    }else
    if (req.url=="/2"){
        fs.readFile(
            car2_filename,
            'utf8',
            async (err, data)=>{
                if(err){
                    await res.writeHead("500");
                    await res.write(err.message)
                    await res.end();
                    return;
                }
                await res.writeHead(
                    200,
                    {'Content-Type': 'application/json'}
                );
        
                await res.write(data);
                await res.end();
            }
        )
    }else
    if (req.url=="/3"){
        fs.readFile(
            car3_filename,
            'utf8',
            async (err, data)=>{
                if(err){
                    await res.writeHead("500");
                    await res.write(err.message)
                    await res.end();
                    return;
                }
                await res.writeHead(
                    200,
                    {'Content-Type': 'application/json'}
                );
        
                await res.write(data);
                await res.end();
            }
        )
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