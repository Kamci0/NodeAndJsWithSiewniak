/* NODE.JS FILE SYSTEM
    Odczyt zawartości pliku - metoda asynchroniczna readFile().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

// Dołączenie zasobów modułu fs:
const fs = require('fs');
// Dołączenie modułu wbudowanego http:
const http = require('http');
// Dołączenie zasobów modułu path:
const path = require('path');

// Deklaracja i inicjalizacja zmiennych pomocniczych:
const fileName = 'data.json';
const rootPath = __dirname + '/files/' + fileName;

const PORT = 8080; // w razie potrzeby należy zmienić

// Utworzenie serwera NODE:
http.createServer((req, res) => {
    // Odczyt zawartości pliku w sposób asynchroniczny:
    fs.readFile(rootPath, 'utf8',
        (err, data) => { // funkcja zwrotna (callback)
            if (err) {
                console.log("UWAGA BŁĄD! ", err.message);
                return
            }

            // Określenie nagłówka odpowiedzi do klienta:
            res.writeHead(200, {'Content-Type': 'application/json'});
            /* UWAGA
                Do klienta będą przesyłane dane tekstowe w formacie JSON.
             */

            // Określenie (zapis) zawartości odpowiedzi:
            res.write(data);

            // Przesłanie danych do klienta i zakończenie transmisji danych:
            return res.end();
        });
})
    .listen(PORT);

// Wyświetlenie komunikatu pomocniczego w konsoli:
console.log('Serwer HTTP nasłuchuje na porcie:', PORT);
console.log("Wpisz w pasku adresu przeglądarki: localhost:" + PORT);
/* UWAGA
    Instrukcje zawarte w ostatnich liniach programu są synchroniczne.
    Dlatego też zostamą wykonane przed operacjami asynchronicznymi, czyli przed odczytem
    zawartości pliku.
 */

