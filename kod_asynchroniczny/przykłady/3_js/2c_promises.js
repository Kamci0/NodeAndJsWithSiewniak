/*  JAVASCRIPT.
    Kod asynchroniczny (asynchronous code).
    Wykorzystanie promisów.

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/

// Definicja funkcji asynchronicznej:
function check(bok) {
    const promise = new Promise((resolve, reject) => {
        if (!isNaN(bok))
            if (bok > 0) {
                // Przesłanie wyniku do funkcji obsługi stanu fulfilled:
                resolve (bok);
            }
            else {
                // Przesłanie wyniku do funkcji obsługi stamnu rejected:
                reject("Uwaga błąd! Nieprawidłowa długość boku!");
            }
        else {
            // Przesłanie wyniku do funkcji obsługi stanu rejected:
            reject("Uwaga błąd! Nieprawidłowy format danej wejściowej!")
        }

    });
    return promise; // funkcja zwraca promisa
}

// Definicja zwykłych funkcji synchronicznych:
function poleKw(a) {
    return (a * a);
}
function obwodKw(a) {
    return (4 * a);
}

// Definicja funkcji zbiorczej (asynchronicznej):
function przetwarzanie(bok) {
    check(bok) // funkcja zwraca promisa
        .then(
            // Obsługa stanu fulfilled (resolved):
            (data) => {
                console.log("Pole wynosi ", poleKw(data));
                console.log("Obwód wynosi ", obwodKw(data));
            },
            // Obsługa stanu rejected:
            (err) => {
                console.log(err);
            }
        )

}

// Wywołanie funkcji zbiorczej:
przetwarzanie(1);



