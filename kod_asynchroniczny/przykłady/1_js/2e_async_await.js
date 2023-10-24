/*  JS - kod asynchroniczny (asynchronous code)
    Funkcja async.

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

// Definicja funkcji pomocniczej:
async function temp(k) {
    console.log(k);
}
/* UWAGA
    Funkcja asynchroniczna async z definicji zwraca promisa.
    W ogólności, funkcję async można stosować bez użycia funkcji await.
 */

let i = 0; // zmienna sterująca pętli
const n = 3; // liczba iteracji

// Przykład poprawnego kodu asynchronicznego:
while (i < n) {
    // Wywołanie funkcji pomocniczej zdefiniowanej wcześniej:
    temp(i);
    //console.log(temp(i));

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
