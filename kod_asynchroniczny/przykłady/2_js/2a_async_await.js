/*  JAVASCRIPT.
    Kod asynchroniczny (asynchronous code).
    Funkcje async i await.
    Stos wywołań funkcji (function call stack).

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/


/* UWAGA
    TEMAT TEN NALEŻY REALIZOWAĆ PO CALLBACKACH I PROMISACH!
 */

async function f1() {
    // Utworzenie promisa:
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Komunikat z funkcji f1() ...")
        },
        0 // zerowe opóźnienie
        )
    });
    /* UWAGA
        Funkcja typu callback, stanowiąca argument funkcji setTimeout() jest wykonywana
        asynchronicznie po zakończeniu wykonywania funkcji nadrzędnej - po upływie określonego,
        zadanego czasu opóźnienia.
     */
    let temp = await promise; // oczekiwanie na rozwiązanie (spełnienie) promisa
    console.log(temp);
}

// Definicja funkcji asynchronicznej:
const f2 = async() => {
    const temp = await "Komunikat z funkcji f2() ...";
    /* UWAGA
        Przetestować działanie aplikacji z oraz bez słowa kluczowego await.
        Zinterpretować uzyskane rezultaty.
     */
    console.log(temp);
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
    Komunikat z funkcji f3() ...
    Komunikat z funkcji f2() ...
    Komunikat z funkcji f1() ...

    Jak widać, najpierw została wykonana zwykła funkcja synchroniczna f3().
    Dopiero po funkcji synchronicznej wywoływane są funkcje asynchroniczne f2() i f1().
    Funkcja f1() - pomimo tego, że w kodzie została wywołana jako pierwsza -
    jest wykonywana faktycznie jako ostatnia.
    Wynika to z pośrednictwa pętli zdarzeń, która w przypadku funkcji f1() obsługuje
    to wywołanie za pomocą mechanizmów:
    1) stosu wywołań funkcji (function call stack);
    2) kolejki funkcji wywołań zwrotnych (callback queue /task queue).
    Funkcja callback (jako argument setTimeout()) jest dodawana do kolejki,
    jeśli wystąpi API przegladarki - tutaj: wywołana zostanie funkcja setTimeout().
 */