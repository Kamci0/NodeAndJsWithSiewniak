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
    const temp  = "Komunikat z funkcji f1() ...";
    return temp;
    /* UWAGA
        W bloku kodu funkcji f1() nie jest zawarte wywołanie funkcji await,
        ponieważ nie jest to konieczne.
        Brak wywołania funkcji await powoduje, że funkcja nie czeka
        aż promis zwróci wartość.
     */
}
// Definicja funkcji asynchronicznej:
const f2 = async() => {
    const temp = await "Komunikat z funkcji f2() ...";
    console.log(temp);
}

// Definicja zwykłej funkcji synchronicznej:
function f3() {
    console.log("Komunikat z funkcji f3() ...");
}

// Wywołania zdefiniowanych funkcji:
f1();
f1().then((value) => console.log(value));
/* UWAGA
    Wywołanie funkcji f1() zostało skojarzone z notacją "promisową".
    Jest to możliwe, ponieważ f1() - jako funkcja async - zwraca promisa.
 */
f2();
f3();

/* UWAGA
    Rezultat wykonania aplikacji jest następujący:
    Komunikat z funkcji f3() ...
    Komunikat z funkcji f1() ...
    Komunikat z funkcji f2() ...

    Jak widać, jako pierwsza została wykonana funkcja synchroniczna f3().
 */