/* NODE.JS FILE SYSTEM
    Utworzenie nowego pliku - metoda appendFile().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/

const fs = require('fs');
const path = require('path');

// Nazwa pliku ze ścieżką:
const fileName = __dirname + '/files/dane.txt';

// Określenie zawartości pliku:
let content = `Pierwsza z dopisanych linii ...
Druga z dopisanych linii ...
Trzecia z dopisanych linii ...`;
/* UWAGA
    Zmienna content została zdefiniawana przy wykorzystaniu literału
    szablonowego (template literal).
 */

/* UWAGA
    Jeśli plik nie istnieje, to można go utworzyć przy wykorzystniu metody appendFile() z pakietu fs.
    W takim przypadku - oprócz utworzenia pliku - zostanie do niego zapisana określona zawartość.
    Jeśli plik o zadanej nazwie już istnieje, to jego poprzednia zawartość zostanie dopisana do starej.

    Użycie metody appendFile() stanowi trzeci sposób utworzenia nowego pliku - oprócz open() i writeFile().
 */

// Wywołanie funkcji writeFile():
fs.appendFile(
    fileName,   // nazwa pliku ze ścieżką
    content, // zawartość pliku
    (err) => { // funkcja typu callback
        if (err) throw err;

        console.log('Funkcja appendFile() została wykonana ...');
    }
);
