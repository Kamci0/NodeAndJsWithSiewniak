/* NODE.JS
   Serwer HTTP. Strona z podstronami.

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/

// Dołączenie zasobów modułu podstawowego http:
const http = require('http');

const PORT = 8090;

// Utworzenie serwera webowego:
const server = http.createServer((req, res) => {
    if (req.url == '/') { // sprawdzenie URL bieżącego żądania

        // Wypisanie w konsoli części adresu URL - po nazwie domeny:
        console.log("Adres URL: ", req.url);
        // Wypisanie w konsoli metody żądania HTTP:
        console.log("Metoda HTTP: ", req.method);

        // Ustalenie nagłówka odpowiedzi:
        res.writeHead(
            200, // sukces
            {'Content-Type': 'text/html'}
        ); // kod HTML

        // Określenie zawartości odpowiedzi + przesłanie porcji/całej zawartości odpowiedzi:
        res.write(
            '<html lang="pl">' +
            '<head>' +
            '<meta charset="UTF-8">' +
            '</head>' +
            '<body>' +
            '<h1 style="font-family: Consolas; color: blue;">Strona główna</h1>' +
            '</body>' +
            '</html>'
        );
        // Zakończenie odpowiedzi:
        res.end();
    }
    else
        if (req.url == "/nauczyciel") { // sprawdzenie URL żądania
            console.log("Adres URL: ", req.url);
            console.log("Metoda HTTP: ", req.method);

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(
            '<html lang="pl">' +
            '<head>' +
            '<meta charset="UTF-8">' +
            '</head>' +
            '<body>' +
            '<h1 style="font-family: Consolas; color: blue;">Podstrona dotycząca nauczyciela</h1>' +
            '</body>' +
            '</html>'
        );
        res.end();
    }
    else
        if (req.url == "/uczen") { // sprawdzenie URL żądania
            console.log("Adres URL: ", req.url);
            console.log("Metoda HTTP: ", req.method);

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(
            '<html lang="pl">' +
            '<head>' +
            '<meta charset="UTF-8">' +
            '</head>' +
            '<body>' +
            '<h1 style="font-family: Consolas; color: blue;">Podstrona dotycząca ucznia</h1>' +
            '</body>' +
            '</html>'
        );
        res.end();
    }
    else
        // Zakończenie odpowiedzi i wyświetlenie w przegladarce informacji o błędzie:
        res.end('Uwaga! Taka podstrona nie istnieje!');

});
// Uruchomienie serwera HTTP:
server.listen(PORT);

// Wyświetlenie informacji o stanie serwera:
console.log('Serwer HTTP pracuje i nasłuchuje na porcie', PORT);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/nauczyciel`);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/uczen`);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/inna`);
console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}/uczen`);