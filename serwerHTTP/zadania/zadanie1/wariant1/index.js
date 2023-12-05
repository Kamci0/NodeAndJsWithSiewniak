const http = require('http');

const PORT = 8080; 

http.createServer((req, res)=>{
    res.writeHead(
        200,
        "Sukces",
        {'Content-Type': 'text/html'}
    );
    res.write(
        '<html lang="pl">' +
        '<head>' +
        '<meta charset="UTF-8">' +
        '</head>' +
        '<body>' +
        '<h1 style="font-family: Consolas">Odpowiedź serwera na żądanie ...</h1>' +
        '<p style="color: red; font-weight: bold;">' +
        'Komunikat testowy w odpowiedzi serwera do przeglądarki ...' +
        '</p>' +
        '</body>' +
        '</html>'
    );

    res.end("Koniec");
}).listen(PORT);