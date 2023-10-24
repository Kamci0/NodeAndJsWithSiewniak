/*  JS - kod asynchroniczny (asynchronous code)
    Funkcje zwrotne (callbacks).

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

// Definicja funkcji pomocniczej:
const temp = (k) => {
    setImmediate(
        () => { // funkcja zwrotna (callback)
            // Wyświetlenie bieżącej wartości zmiennej sterującej
            console.log(k);
        }
    );
}

let i = 0; // zmienna sterująca pętli
const n = 3; // liczba iteracji

// Przykład poprawnie zaprojektowanego kodu asynchronicznego:
while (i < n) {
    // Wywołanie funkcji pomocniczej:
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