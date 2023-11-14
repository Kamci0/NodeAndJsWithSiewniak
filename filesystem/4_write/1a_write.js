/* NODE.JS FILE SYSTEM
    Zapis danych do pliku - metoda writeFile().

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
    Zmienna content została zdefiniawana przy wykorzystaniu literału
    szablonowego (template literal).
 */

/* UWAGA
    Zapis informacji (danych) do pliku można zrealizować za pomocą metody writeFile()
    zawartej w pakiecie fs.

    Jeśli plik o podanej nazwie nie istnieje, to zostanie utworzony.
    Jeśli taki plik już istnieje, wówczas jego zawartość zostanie zastąpiona nową.
 */

// Wywołanie funkcji writeFile():
fs.writeFile(
    fileName, // nazwa pliku ze ścieżką
    content, // zawartość zapisywana w pliku
    (err) => { // funkcja typu callback
        if (err)
            console.log("Uwaga błąd!", err.message);
        else
            console.log('Funkcja writeFile() została wykonana ...');
    }
);

/* UWAGA
    Dane do pliku można zapisać również za pomocą innych metod, np.:
    a) fs.writeFileSync() - zapis synchroniczny;
    b) fsPromises.writeFile() - przy użyciu "promisów" opartych na API
 */