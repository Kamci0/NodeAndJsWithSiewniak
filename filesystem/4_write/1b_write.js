/* NODE.JS FILE SYSTEM
    Zapis danych do pliku - metoda appendFile().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

const fs = require('fs');
const path = require('path');

// Nazwa pliku ze ścieżką:
const fileName = __dirname + '/files/dane.txt';

// Określenie zawartości do zapisania w pliku:
let content = `Pierwsza linia ...
Druga linia ...
Trzecia linia ...`;

/* UWAGA
    Zapis informacji (danych) do pliku można zrealizować za pomocą metody appendFile()
    z pakietu fs.

    Jeśli plik o podanej nazwie nie istnieje, to zostanie utworzony.
    Jeśli taki plik już istnieje, nowe informacje zostaną dopisane do pliku - na jego końcu.
 */

// Wywołanie funkcji appendFile():
fs.appendFile(
    fileName,   // nazwa pliku ze ścieżką
    content,            // zapisywana (dopisywana) zawartość
    (err) => {    // funkcja typu callback
        if (err)
            console.log("Uwaga błąd!", err.message);
        else
            console.log('Funkcja appendFile() została wykonana ...');
    }
);
