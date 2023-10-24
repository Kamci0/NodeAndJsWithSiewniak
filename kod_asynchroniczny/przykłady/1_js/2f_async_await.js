/*  JS - kod asynchroniczny (asynchronous code)
    Funkcje async, await.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

// Definicja funkcji pomocniczej:
async function temp(k) {
    return await k; // funkcja acync zwraca promisa
}
/* UWAGA
    Funkcja asynchroniczna async z definicji zwraca promisa.
    Funkcja await oczekuje na promisa - czeka, aż promis zwroci zadaną wartość.
    Funkcja ta może występować jedynie w bloku async.
 */

let i = 0; // zmienna sterująca pętli
const n = 3;

// Przykład poprawnego kodu asynchronicznego:
while (i < n) {
    // Wywołanie funkcji pomocniczej zdefiniowanej wcześniej:
    temp(i) // funkcja temp() zwraca promisa
        // Obsługa stanu resolved promisa:
        .then((value) => {
            console.log(value)
    })
    // Inkrementacja zmiennej sterującej pętli:
    i++;
}

/* UWAGA
    Wynik działania programu w konsoli:
    0
    1
    2

    Pytanie kontrolne:
    dlaczego wynik działania programu jest prawidłowy?
 */
