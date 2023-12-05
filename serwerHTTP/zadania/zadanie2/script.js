const http = require('http');
const fs = require('fs');

const mainPage = "./pages/index.html";
const subPage1 = "./pages/index1.html";
const subPage2 = "./pages/index2.html";
const PORT = 8020; 

const server = http.createServer(
    (req,res)=>{
        if(req.url=="/"){
            fs.readFile(
                mainPage,
                'utf8',
                (err, data)=>{
                    if(err){
                        return console.log(err);
                    }
                    res.writeHead(
                        200,
                        {'Content-Type': 'text/html'}
                    );
            
                    res.write(data);
                    res.end();
                }
            )
        }else
        if(req.url == "/1"){
            fs.readFile(
                subPage1,
                'utf8',
                (err, data)=>{
                    if(err){
                        return console.log(err);
                    }
                    res.writeHead(
                        200,
                        {'Content-Type': 'text/html'}
                    );
            
                    res.write(data);
                    res.end();
                }
            )
        }else
        if(req.url == "/2"){
            fs.readFile(
                subPage2,
                'utf8',
                (err, data)=>{
                    if(err){
                        return console.log(err);
                    }
                    res.writeHead(
                        200,
                        {'Content-Type': 'text/html'}
                    );
            
                    res.write(data);
                    res.end();
                }
            )
        }else{
            res.end('Nie ma takiej podstrony');
        }
    }
);

server.listen(PORT);