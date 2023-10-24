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
    console.log(temp);
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
    /* UWAGA
        Przetestować działanie aplikacji z oraz bez słowa kluczowego await.
        Zinterpretować uzyskane rezultaty.
     */
    console.log(temp);
}
/* UWAGA
    Funkcja f2() zawiera wywołania dwóch funkcji specjalnych: async i await.
    Funkcja (słowo kluczowe) async definiuje funkcję asynchroniczną.
    Funkcja asynchroniczna to taka funkcja, która działa asynchronicznie.
    Asynchroniczność jest osiągana za pośrednictwem pętli zdarzeń (event loop).
    Funkcja async zwraca obietnicę (promisa).

    Blok funkcji async może zawierać wywołanie funkcji await, co pozwala na wstrzymanie
    wywołania funkcji asynchronicznej i oczekiwanie na promisa - po czym znowu następuje
    wznawienie działania funkcji async.

    Innymi słowy, funkcja await oczekuje na promisa - a w szczególności czeka,
    aż promis zwroci określoną wartość.
    Funkcja ta może występować jedynie w bloku async.
 */


// Definicja zwykłej funkcji synchronicznej:
function f3() {
    console.log("Komunikat z funkcji f3() ...");
}

// Wywołania zdefiniowanych funkcji:
f1();
f2();
f3();

/* UWAGA
    Silnik JS może wykonać w danej chwili tylko jedną instrukcję (operację).
    Wymaga to dostarczenia do pętli zdarzeń informacji, kiedy należy wykonać konkretną instrukcję.
    Pętla zdarzeń obsługuje to za pomocą mechanizmów:
    1) stosu wywołań funkcji (function call stack);
    2) kolejki funkcji wywołań zwrotnych (callback queue /task queue).
    Tutaj żadne funkcje zwrotne (callbacki) nie występują.

    Rezultat wykonania aplikacji jest następujący:
    Komunikat z funkcji f1() ...
    Komunikat z funkcji f3() ...
    Komunikat z funkcji f2() ...

    Jak widać, funkcja f2() została wykonana po wykonaniu funkcji asynchronicznej f1()
    oraz synchronicznej f3().
    Pomimo tego, że funkcję f1() zadeklarowano za pomocą słowa kluczowego async,
    jako asynchroniczną, jest ona wykonywana jako pierwsza. Jest tak dlatego,
    że w jej bloku nie ma żadnych operacji asynchronicznych.
 */