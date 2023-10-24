/*  JAVASCRIPT.
    Kod asynchroniczny (asynchronous code).

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/

/* UWAGA
    TEMAT TEN NALEŻY REALIZOWAĆ PO CALLBACKACH I PROMISACH!
 */

/* UWAGA
    Asynchroniczność w JS można programować przy wykorzystaniu:
    1) funkcji zwrotnych (callback) skojarzonych z Web API (np. setTimeout());
    2) promisów;
    3) funkcji async, await.

    Tutaj wykorzystano funkcje zwrotne (callbacks).
 */

// Definicja funkcji asynchronicznej:
function callbackAsync() {
    setImmediate(
        () => { // funkcja zwrotna (callback)
            console.log("Komunikat z funkcji asynchronicznej callbackAsync() ...");
    })
}
/* UWAGA
    Asynchroniczność funkcji callbackA() wynika z wykorzystania w jej ciele metody setImmediate().
 */
/* UWAGA
    Zadaniem funkcji setImmediate() jest, aby funkcja zwrotna (callback) stanowiąca jej argument
    została wykonana (dopiero) w następnej iteracji pętli zdarzeń (event loop).
    Oznacza to wprowadzenie asynchroniczności do wykonywanego kodu.

    Patrząc z kolei z punktu widzenia callbacka (stanowiącego argument setImmediate()),
    zostanie on wykonany dopiero pozakończeniu wykonywania jego funkcji nadrzędnej,
    czyli setImmediate().
    Rola setImmediate() jest analogiczna jak funkcji setTimeout() z czasem opóźnienia 0.
    Nie zmienia to jednak faktu, że callback stanowiący argument setTimeout() zostanie
    wykonany dopiero po zakończeniu wykonywania setTimeout().
 */

// Definicja zwykłej funkcji synchronicznej:
function callbackSync() {
    console.log("Komunikat z funkcji synchronicznej callbackSync() ...");
}

// Definicja funkcji z parametrem funkcyjnym:
function f1(callback) {
    callback();
}
/* UWAGA
    Na podstawie definicji funkcji f1() nie można stwierdzić, czy jest to funkcja synchroniczna,
    czy asynchroniczna. Wiadomo tylko tyle, że jej parametrem jest funkcja.
    Synchroniczność lub asynchroniczność funkcji f1() zależy od rodzaju callbacka,
    stanowiącego argument f1().
 */

// Definicja funkcji asynchronicznej:
let f2 = function() {
    setTimeout(() => {
            console.log("Komunikat z funkcji asynchronicznej f2() ...");
        },
        10 // czas opóźnienia
    )
}

// Definicja funkcji synchronicznej:
let f3 = () => {
    console.log('Komunikat z funkcji synchronicznej f3() ...');
}


// Wywołania zdefiniowanych funkcji w zadanej kolejności:
f1(callbackAsync); // callbackAsync() stanowi funkcję asynchroniczną
f1(callbackSync); // callbackSync() stanowi funkcję synchroniczną
f2(); // f2() jest funkcją asynchroniczną
f3(); // f3() jest zwykłą funkcją synchroniczną

/* UWAGA
    Wynik działania programu:
    Komunikat z funkcji synchronicznej callbackSync() ...
    Komunikat z funkcji synchronicznej f3() ...
    Komunikat z funkcji asynchronicznej callbackAsync() ...
    Komunikat z funkcji asynchronicznej f2() ...

    Funkcje synchroniczne zdefiniowane w aplikacji są wykonywane kolejno
    - jak w kodzie źródłowym.
    Operacje asynchroniczne są realizowane z kolei zgodnie z kolejnością
    ich obsługi za pomocą pętli zdarzeń (event loop).
 */
