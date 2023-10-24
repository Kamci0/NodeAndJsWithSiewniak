/*  JAVASCRIPT.
    Kod asynchroniczny (asynchronous code).
    Funkcje async i await.
    Stos wywołań funkcji (function call stack).

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/


/* UWAGA
    TEMAT TEN NALEŻY REALIZOWAĆ PO CALLBACKACH I PROMISACH!
 */


// Definicja funkcji asynchronicznej:
async function f1() {
    const promise = new Promise((resolve) => {
        resolve("Komunikat z funkcji f1() ...");
    })
    let temp = await promise; // oczekiwanie na rozwiązanie (spełnienie) promisa
    console.log(temp);
}
// Definicja funkcji asynchronicznej:
const f2 = async() => {
    const promise = new Promise((resolve) => {
        resolve(undefined); // promis przyjmuje wartość bez znaczenia
    })
    console.log("Komunikat z funkcji f2() ...");
    return await promise;
}

// Definicja zwykłej funkcji synchronicznej:
function f3() {
    console.log("Komunikat z funkcji f3() ...");
}

// Wywołania zdefiniowanych funkcji:
f1();
f2();
f3();

/* UWAGA
    Rezultat wykonania aplikacji jest następujący:
    Komunikat z funkcji f2() ...
    Komunikat z funkcji f3() ...
    Komunikat z funkcji f1() ...

    Zadanie kontrolne: wyjaśnić kolejność wykonywania poszczególnych funkcji.

 */