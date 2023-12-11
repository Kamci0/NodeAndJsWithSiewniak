const http = require('http');
const fs = require('fs');

const PORT = 8080;
const filename = 'data.txt';

const date = new Date();
const data = {
    dzien: date.getDate(),
    miesiac: date.getMonth() + 1,
    rok: date.getFullYear()
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});

    res.write(
        JSON.stringify(data)
    );
    res.end();
});

const buffer = Buffer.alloc(64);

buffer.write(JSON.stringify(data));

fs.writeFile(
    filename, 
    buffer,     
    (err) => {
        if (err)
            console.log("Błąd", err.message);
        else
            console.log('Funkcja writeFile() została wykonana ...');
});


server.listen(PORT, 'localhost', () => {
    console.log(`http://localhost:${PORT}`);
});
