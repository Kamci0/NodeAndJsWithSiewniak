/*  NODE.JS.
    Kod asynchroniczny (asynchronous code).
    Odczyt zawartości pliku w sposób asynchroniczny - metoda readFile().

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/

// Dołączenie zasobów publicznych modułu fs:
const fs = require('fs');
// Dołączenie zasobów modułu path:
const path = require("path");

// Ścieżka dostępu do pliku z danymi (należy dostosować do systemu):
const rootPath = __dirname + '/files/data.txt';

// Wyświetlenie komunikatu kontrolnego:
console.log("Komunikat kontrolny: instrukcja przed wywołaniem readFile() ...");
fs.readFile(
    /* UWAGA
        Funkcje asynchroniczne - jak np. readFile() - nie zwracają żadnej wartości.
        Jednakże wartości mogą być przekazywane do funkcji callback która stanowi
        jej argument. Tutaj do callbacka przekazywane są dwa parametry: err i data.

        W ogólności, funkcje, których parametr/argument stanowią inne funkcje
        nazywan są funkcjami wyższego rzędu (high order functions) lub funkcjami
        nadrzędnymi (superior).
     */

    rootPath, // ścieżka dostępu do pliku
    'utf-8', // system kodowania

    // Funkcja zwrotna (callback):
    (err, data) => {
        if (err) {
            return console.log("Uwaga błąd! ", err.message);
        }
        console.log(data);
    }
)
// Wyświetlenie komunikatu kontrolnego:
console.log("Komunikat kontrolny: instrukcja po wywołaniu readFile() ...");

/* UWAGA
    Funkcja readFile() pozwala na asynchroniczny odczyt zawartości pliku.
    Jednym z jej argumentów jest funkcja typu callback, która jest wykonywana
    dopiero po zakończeniu wykonywania jej funkcji nadrzędnej, czyli readFile().
    Wykonywanie innych operacji nie jest blokowane - są one kontynuowane niezależnie
    od odczytu poliku w sposób asynchroniczny.

    Tym samym, rezultat wykonania aplikacji jest następujący:

    Komunikat kontrolny: instrukcja przed wywołaniem readFile() ...
    Komunikat kontrolny: instrukcja po wywołaniu readFile() ...
    Zawartość pliku data.txt ...
 */

