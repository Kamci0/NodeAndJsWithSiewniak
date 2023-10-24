/*  JS - kod asynchroniczny (asynchronous code)
    Funkcja async.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

// Definicja funkcji pomocniczej:
function temp(k) {
    const promise = new Promise((resolve) => {
        resolve (k);
    })
    return promise;
}

let i = 0; // zmienna sterująca pętli
const n = 3; // liczba iteracji

// Przykład poprawnego kodu asynchronicznego:
while (i < n) {
    // Wywołanie funkcji pomocniczej:
    temp(i) // funkcja temp() zwraca promisa
        // Obsługa stanu resolved:
        .then((value) => {
            console.log(value);
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
