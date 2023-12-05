/*  NODE.JS GLOBAL OBJECTS
    Obiekt globalny process.


    © Piotr Siewniak, wersja: 2.XII.2021 r.
*/



process.stdout.write("Komunikat z pierwszej linii kodu aplikacji ...\n");
/* UWAGA
    Obiekt process.stdout stanowi zwykły strumień zapisywalny (writable stream).
    Pozwala on na zapisanie informacji na standardowym wyjściu stdout.
 */

// Ustalenie systemu kodowania dla strumienia process.stdin:
process.stdin.setEncoding('utf8');
/* UWAGA
   Obiekt process.stdin stanowi zwykły strumień odczytywalny (readable stream).
   Pozwala on na odczyt informacji ze standardowego wejścia stdin.
 */

process.stdin.on(
    'readable', // nazwa zdarzenia
    () => { // funkcja obsługi zdarzenia readable
        const chunk = process.stdin.read();
        if (chunk !== null) {
            process.stdout.write("echo: " + chunk);
        }
    }
);

process.stdin.on(
    'end', // nazwa zdarzenia
    () => { // funkcja obsługi zdarzenia end
        process.stdout.write('end');
    }
);



// Wyświetlenie bieżącego katalogu (ze ścieżką):
console.log(process.cwd(), '\n');




