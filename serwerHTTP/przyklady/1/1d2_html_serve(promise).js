/* NODE.JS - HTTP Server.
   Serwowanie plików HTML. Wykorzystanie PROMISÓW (wersja II).

   © Piotr Siewniak 2021, wersja: 20.X.2021 r.
*/

const http = require('http');
const fs = require('fs').promises;
/* UWAGA
    API fs.promises dostarcza zestaw metod asychronicznych zwracających obietnice (obiekty klasy Promise).
    Dzięki temu, obsługa plików może być realizowana za pomocą obietnic.
 */
const path = require('path');


const PORT = 8080; // w razie potrzeby należy zmienić
const fileName = __dirname + '/html/webpage.html'; // pełna ścieżka dostępu do pliku HTML

// Definicja funkcji pomocniczej - "listenera żądań":
const requestListener = (req, res) => {
    // Odczyt pliku HTML w sposób asynchroniczny:
    const promise = fs.readFile(fileName); // metoda fs.readFile() zwraca promisa
    /* UWAGA
       Metoda fs.readFile() zwraca promisa, ponieważ w aplikacji wykorzystywane jest API "promisowe".
     */

    // Obsługa promisa:
    promise
        // Obsługa stanu fulfilled (plik HTML odczytany pomyślnie):
        .then((data) => {
            // Ustalenie kodu statusu odpowiedzi:
            res.statusCode = 200; // pomyślna odpowiedź
            // Ustalenie nagłówka odpowiedzi:
            res.setHeader('Content-Type', 'text/html'); // zawartość odpowiedzi - HTML
            // Przesłanie danych do klienta i zakońćzenie odpowiedzi:
            res.end(data);
        })
        // Obsługa stanu rejected:
        .catch((err) => {
            res.writeHead(500);
            res.end("Uwaga!", err.message);
            return;
        })
}

// Utworzenie obiektu serwera HTTP:
const server = http.createServer(requestListener);

// Uruchomienie serwera webowego:
server.listen(PORT, () => {
    // Wyświetlenie informacji w konsoli:
    console.log('Serwer webowy pracuje, nasłuchuje i oczekuje żądania na porcie', PORT);
    console.log(`Wpisz w pasku adresu przeglądarki: http://localhost:${PORT}`);
});


