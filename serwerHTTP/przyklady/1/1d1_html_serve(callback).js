/* NODE.JS - HTTP Server.
   Serwowanie plików HTML. Wykorzystanie CALLBACKÓW (wersja I).

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/

const http = require('http');
const fs = require('fs');
const path = require('path');


const PORT = 8081; // w razie potrzeby należy zmienić
const fileName = __dirname + '/html/webpage.html'; // pełna ścieżka dostępu do pliku HTML

// Definicja funkcji pomocniczej - "listenera żądań":
const requestListener = (req, res) => {
    // Odczyt pliku HTML w sposób asynchroniczny:
    fs.readFile(
        fileName, // nazwa pliku ze ścieżką
        (err, data) => { // funkcja zwrotna
        /* UWAGA
            Funkcja zwrotna zostanie wykonana po wykonaniu funkcji nadrzędnej (fs.readFile()),
            czyli po odczycie piliku (w całości).
         */
            if (err) {
                res.writeHead(500);
                /* UWAGA
                    Kod 500 to błąd wewnętrzny serwera (internal server error) oznaczający,
                    że serwer nie jest w stanie zwrócić strony, która się na nim znajduje
                    z bliżej nieokreślonego (nieznanego) powodu.
                 */
                // Przesłanie komunikatu do klienta:
                res.end("Uwaga!", err.message);
                return; // funkcja zwrotna kończy działanie i zwraca undefined
            }
            // W PRZYPADKU POMYŚLNEGO ODCZYTU PLIKU:
            res.statusCode = 200; // pomyślna odpowiedź
            // Definicja i wysłanie nagłówka odpowiedzi:
            res.setHeader('Content-Type', 'text/html'); // zawartość odpowiedzi - HTML
            // Przesłanie strony WWW (data) do klienta (i zakończenie odpowiedzi):
            res.end(data);
        });
}

// Uruchomienie serwera:
http.createServer(requestListener)  // argumentem wywołania metody createServer() jest zdefiniowana funkcja
                                    // funkcja ta stanowi funkcję zwrotną, która zostanie wykonana
                                    // po uruchomieniu serwera HTTP
    .listen(PORT, () => {
        console.log('Serwer webowy pracuje, nasłuchuje i oczekuje żądania na porcie', PORT);
        console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
    });


