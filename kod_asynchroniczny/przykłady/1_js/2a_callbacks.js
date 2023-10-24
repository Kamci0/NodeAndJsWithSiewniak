/*  JS - kod asynchroniczny (asynchronous code)
    Funkcje zwrotne (callbacks).

    © Piotr Siewniak, wersja: 10.XII.2021 r.
*/

let i = 0; // zmienna sterująca pętli
const n = 3; // liczba iteracji

// Przykład błędnie zaprojektowanego kodu asynchronicznego:
while (i < n) {
    setTimeout(
        () => { // funkcja zwrotna (callback)
        // Wyświetlenie bieżącej wartości zmiennej sterującej
        console.log(i);
    },
        0 // opóźnienie
    );
    i++;
}
/* UWAGA
    Wynik działania aplikacji jest następujący:
    3
    3
    3
    Odpowiedzieć na pytanie: dlaczego uzyskano taki rezultat?

    Asynchroniczność została wprowadzona w programie poprzez użycie funkcji
    asynchronicznej setTimeout().
    Callback stanowiący argument funkcji setTimeout() zostanie wykonany dopiero
    po zakończeniu wykonywania jej caller'a, czyli funkcji setTimeout().
    Wtedy, wartość zmiennej sterującej 'i' wynosi już 3.
 */