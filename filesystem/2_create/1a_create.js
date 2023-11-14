/* NODE.JS FILE SYSTEM
    Utworzenie nowego pliku - metoda open().

    © Piotr Siewniak, wersja: 3.XI.2021 r.
*/
const fs = require('fs');
const path = require('path');

// Nazwa pliku ze ścieżką:
const fileName = __dirname + '/files/dane.txt';

// Utworzenie nowego pliku:
fs.open(
    fileName, // nazwa pliku ze ścieżką

    'w+',               // Flaga oznaczająca, że plik został otwarty do zapisu i odczytu.
                        // Jeśli plik o podanej nazwie nie istnieje, wówczas zostanie utworzony.
                        // Jeśli taki plik już istnieje, to jego dotychczasowa zawartość zostanie obcięta.
    /* UWAGA
        W metodzie open() z pakietu fs można używać wielu flag, np.
        w  - otwarcie pliku do zapisu. Jeśli plik już istnieje, to zostanie pokryty;
        r  - otwarcie pliku do odczytu, jeśli plik nie istnieje zostanie wygenerowany wyjątek;
        r+ - otwarcie do odczytu i zapisu, jeśli plik nie istnieje zostanie wygenerowany wyjątek;
        a  - otwarcie pliku do dopisania, jeśli plik nie istnieje, to zostanie utworzony;
        a+ - otwarcie do dopisania i odczytu, jeśli plik nie istnieje, to zostanie utworzony;
        itd.
     */
    (err, file) => {  // funkcja zwrotna
        if (err) throw err; // w przypadku błędu zostanie wygenerowany (wyrzucony) wyjątek
                            // i funkcja kończy działanie
        /* UWAGA
            Zamiast instrukcji powyżej można również wyświetlić informacje o błędzie
            w sposób bezpośredni i zakończyć wykonywanie funkcji (return):
            if (err) {
                return console.error(err);
            }
         */

        // Wyświetlenie komunikatu o pomyślnym wykonaniu operacji:
        console.log('Nowy plik został utworzony ...');
    }
);
