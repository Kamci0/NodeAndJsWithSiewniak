/*  JS - kod asynchroniczny (asynchronous code)
    Funkcje zwrotne (callbacks).

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

// Definicja funkcji pomocniczej:
function temp(k) {
    setTimeout(
        () => {
            // Wyświetlenie bieżącej wartości zmiennej sterującej
            console.log(k);
        },
        0
    );
}

let i = 0; // zmienna sterująca pętli
const n = 3; // liczba iteracji

// Przykład poprawnie zaprojektowanego kodu asynchronicznego:
while (i < n) {
    // Wywołanie funkcji pomocniczej zdefiniowanej wcześniej:
    temp(i);
    // Inkrementacja zmiennej sterującej pętli:
    i++;
}
/* UWAGA
    Wynik działania aplikacji jest następujący:
    0
    1
    2

    Pytanie kontrolne:
    dlaczego uzyskano prawidłowy rezultat?
 */