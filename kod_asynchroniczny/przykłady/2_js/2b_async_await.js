/*  JAVASCRIPT.
    Kod asynchroniczny (asynchronous code).
    Funkcje async i await.
    Stos wywołań funkcji (function call stack).

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/

/* UWAGA
    TEMAT TEN NALEŻY REALIZOWAĆ PO CALLBACKACH I PROMISACH!
 */



// Definicja funkcji pomocniczej:
function f() {
    // Utworzenie promisa:
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Komunikat z funkcji f1() ...")
        },
        0 // zerowe opóźnienie
        )
    });
}
// Definicja funkcji asynchronicznej:
const f1 = async () => {
    let temp = await f();
    console.log(temp)
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

c
function f3() {
    console.log("Komunikat z funkcji f3() ...");
}

// Wywołania zdefiniowanych funkcji:
f1();
f2();
f3();

/* UWAGA
    Rezultat wykonania aplikacji:
    Komunikat z funkcji f3() ...
    Komunikat z funkcji f2() ...
    Komunikat z funkcji f1() ...

    Funkcja f3() - jako funkcja synchroniczna - jest wywoływana jako pierwsza.
    Funkcja f2() jest umieszczana na stosie wywołań funkcji jako druga,
    po czym jest wykonywana.
    Funkcja f3() zawiera Web API setTimeout(), której jeden z argumentów stanowi
    funkcja zwrotna (callback). Funkcja ta jest wykonywana jako ostatnia po
    pobraniu jej z kolejki oczekujących funkcji callback.
 */