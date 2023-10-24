/*  NODE.JS.
    Kod asynchroniczny (asynchronous code).
    Odczyt zawartości pliku w sposób asynchroniczny:
    - metoda readFile();
    - wykorzystanie promisa.

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/

// Dołączenie zasobów publicznych modułu fs:
const fs = require('fs');
// Dołączenie zasobów modułu path:
const path = require("path");

// Ścieżka dostępu do pliku z danymi (należy dostosować do systemu):
const rootPath = __dirname + '/files/data.txt';

// Definicja funkcji asynchronicznej:
const readingFile = (filePath) => {
    // Utworzenie obiektu promisa:
    const promise = new Promise(
        // Funkcja callback zawierająca dwa parametry funkcyjne: resolve i rejected:
        (resolve, reject) => {
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    // Przesłanie ewentualnego błędu do funkcji obsługi stanu rejected:
                    return reject(err);
                    /* UWAGA
                        Metoda reject() zwraca obiekt klasy Promise, jeśli obietnica
                        nie została dotrzymana z określonego powodu.
                        Błąd zostaje przesłany do funkcji obsługi catch().
                     */
                }
                // Przesłanie danych do funkcji obsługi stanu fulfilled (resolved):
                resolve(data.toString());
                /* UWAGA
                    Metoda resolve() zwraca obiekt klasy Promise zawierający obiecaną wartość.
                    Obiecana wartość zostaje przesłana do funkcji obsługi promisa then().
                 */
            })
        })
    return promise; // funkcja zwraca promisa
}
/* UWAGA
    W funkcji readingFile() zdefiniowano promisa, który w stanie rozwiązanym (resolved)
    pozwala na zapamiętanie zawartości pliku tekstowego.
 */

// Wyświetlenie komunikatu kontrolnego:
console.log("Komunikat kontrolny: instrukcja przed wywołaniem funkcji readingFile() ...");

// Wywołanie zdefiniowanej funkcji readingFile():
readingFile(rootPath)
    // Obsługa stanu resolved (zdarzenia onfulfilled):
    .then((data) => {
        // Wyświetlenie zawartości pliku:
        console.log(data);
    })
    // Obsługa stanu rejected (zdarzenia onrejected):
    .catch((err) => {
            console.log("Uwaga błąd! ", err.message);
    })

// Wyświetlenie komunikatu kontrolnego:
console.log("Komunikat kontrolny: instrukcja po wywołaniu funkcji readingFile() ...");

/* UWAGA
    Rezultat wykonania aplikacji:

    Komunikat kontrolny: instrukcja przed wywołaniem funkcji readingFile() ...
    Komunikat kontrolny: instrukcja po wywołaniu funkcji readingFile() ...
    Zawartość pliku data.txt ...

    Jak widać, w czasie odczytu zawartości pliku tekstowego są wykonywane inne operacje,
    czyli program działa w sposób asynchroniczny.
 */

