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

    Tutaj wykorzystano obietnice (promisy).
 */

// Definicja funkcji asynchronicznej:
function callback() {
    const promise = new Promise((resolve) => {
        resolve("Komunikat z funkcji asynchronicznej callback() ...");

    });
    return promise; // funkcja zwraca promisa
}

// Definicja funkcji asynchronicznej:
function f1() {
    const promise = new Promise((resolve) => {
        resolve("Komunikat z funkcji asynchronicznej f1() ...");

    });
    return promise; // funkcja zwraca promisa
}

// Definicja funkcji asynchronicznej:
let f2 = function(promise) {
    promise().then((data) => {
        console.log(data);
    });
}

// Definicja funkcji synchronicznej:
let f3 = () => {
    console.log('Komunikat z funkcji synchronicznej f3() ...');
}


// Wywołania zdefiniowanych funkcji w zadanej kolejności:
f1() // funkcja f1() zwraca promisa
    // Obsługa stanu fulfilled (resolved):
    .then((data) => {
        console.log(data);
    });

f2(callback); // f2() jest funkcją asynchroniczną
f3(); // f3() jest zwykłą funkcją synchroniczną

/* UWAGA
    Wynik działania programu:
    Komunikat z funkcji synchronicznej f3() ...
    Komunikat z funkcji asynchronicznej f1() ...
    Komunikat z funkcji asynchronicznej callback() ...

    Funkcje synchroniczne zdefiniowane w aplikacji są wykonywane kolejno - jak w kodzie
    źródłowym. Operacje asynchroniczne są realizowane z kolei zgodnie z kolejnością
    ich obsługi przy wykorzystaniu pętli zdarzeń.
 */
