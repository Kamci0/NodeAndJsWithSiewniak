/*  NODE.JS.
    Kod synchroniczny (synchronous code).
    Odczyt zawartości pliku w sposób synchroniczny - metoda readFileSync().

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/

// Dołączenie zasobów publicznych modułu fs:
const fs = require('fs');
// Dołączenie zasobów modułu path:
const path = require("path");

// Ścieżka dostępu do pliku z danymi (należy dostosować do systemu):
const rootPath = __dirname + '/files/data.txt';

let data; // zmienna pomocnicza

// Wyświetlenie komunikatu kontrolnego:
console.log("Komunikat kontrolny: instrukcja przed wywołaniem readFileSync() ...");

try {

    // Synchroniczny odczyt zawartości pliku:
    data = fs.readFileSync(
        /* UWAGA
            Funkcja synchroniczna readFileSync() zwraca zawartość odczytanego pliku.
         */
        rootPath, // ścieżka dostępu do pliku
        'utf-8' // system kodowania
    );
}
catch (e) {
    console.log("Uwaga błąd! ", e)
}
// Wyświetlenie zawartości pliku:
console.log(data);

// Wyświetlenie komunikatu kontrolnego:
console.log("Komunikat kontrolny: instrukcja po wywołaniu readFileSync() ...");
/* UWAGA
    Wszystkie operacje są wykonywane synchronicznie. Oznacza to, że najpierw zostanie odczytana
    cała zawartości pliku, a dopiero po zakończeniu tej operacji będzie wykonywana kolejna
    (po odczycie pliku) operacja, czyli wyświetlenie komunikatu kontrolnego.
    Obsługa błędów jest realizowana za pomocą bloku try-catch.


    Rezultat wykonania aplikacji:

    Komunikat kontrolny: instrukcja przed wywołaniem readFileSync() ...
    Zawartość pliku data.txt ...
    Komunikat kontrolny: instrukcja po wywołaniu readFileSync() ...
 */

