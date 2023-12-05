/* NODE.JS FILE SYSTEM
    Odczyt zawartości pliku - metoda synchroniczna readFileSync().
    Kod blokujący - synchroniczny.

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/
// Dołączenie zasobów modułu fs:
const fs = require('fs');
// Dołączenie zasobów modułu path:
const path = require('path');

// Deklaracja i inicjalizacja zmiennych pomocniczych:
const fileName = 'dane.txt';
const rootPath = __dirname + '/files/' + fileName;
/* UWAGA
    Zmienna środowiskowa __dirname określa pełną ścieżkę dostępu do katalogu,
    w którym jest zapisany uruchamiany skrypt. Wymaga dołączenia modułu path.
 */

// Odczyt zawartości pliku w sposób synchroniczny:
let data = fs.readFileSync(
    rootPath, // ścieżka dostępu do pliku
    'utf8'); // system kodowania znaków
/* UWAGA
    Metoda readFileSync() zwraca albo zawartość bufora z danymi po odczytaniu całości pliku,
    albo łańcuch znaków. Jest to zależne od tego, czy system kodowania zostanie określone, czy nie.
    Jeśli system kodowania zostanie podany, wówczas metoda zwraca łańcuch znaków.

    Należy zwrócić uwagę na to, że metoda readFileSync() najpierw pobierze całą zawartość pliku do pamięci,
    a dopiero później przekaże sterowanie do środowiska wykonawczego. Jest to sposób polegający na
    buforowaniu danych. Żadna inna instrukcja nie może być wykonywana w trakcie odczytu pliku.
 */

console.log(data.toString());
/* UWAGA
    Synchroniczne odczytywanie zawartości pliku nie jest zalecane, ponieważ dalsze wykonywanie aplikacji
    zostaje wstrzymane, aż cały plik zostanie odczytany.
 */

// Kolejne instrukcje w programie:
console.log("Kolejna instrukcja w programie ....");
console.log("Ostatnia instrukcja w programie ...");
/* UWAGA
    Instrukcje powyżej nie zostaną wykonane przed zakończeniem procesu odczytu pliku,
    ponieważ jest on realizowany w sposób synchroniczny - blokujący.
 */
