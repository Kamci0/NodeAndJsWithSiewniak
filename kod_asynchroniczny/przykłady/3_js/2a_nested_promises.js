/*  PODSTAWY JAVASCRIPT.
    Kod asynchroniczny (asynchronous code).
     Wykorzystanie zagnieżdżonych obietnic (nested promises).

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/

// Definicja funkcji asynchronicznej:
function poleKw(a) {
    // Utworzenie obiektu promisa:
    const promise = new Promise((resolve, reject) => {
        if (a > 0)
            // Przesłanie danych do funkcji obsługi dla stanu resolved (fulfilled):
            resolve (a * a);
        else
            // Przesłanie danych do funkcji obsługi dla stanu rejested:
            reject("Uwaga błąd! Nieprawidłowa dana wejściowa!");
    });

    return promise; // funkcja zwraca promisa
}

// Definicja funkcji asynchronicznej:
obwodKw = (a) => {
    const promise = new Promise((resolve, reject) => {
        if (a > 0)
            resolve (4 * a);
        else
            reject("Uwaga błąd! Nieprawidłowa dana wejściowa!");
    });
    return promise;
}


// Definicja funkcji zbiorczej (asynchronicznej):
function przetwarzanie(bok) {
    poleKw(bok) // funkcja poleKw() zwraca promisa
        // Obsługa stanu fulfilled (resolved):
        .then(
            (data) => { // funkcja obsługi stanu fulfilled
                console.log("Pole kwadratu wynosi ", data);
                obwodKw(bok) // funkcja obwodKw() również zwraca promisa
                    // Obsługa stanu fulfilled (resolved):
                    .then(
                        (data) => { // funkcja obsługi stanu fulfilled
                            console.log("Obwód kwadratu wynosi ", data);
                        }
                    )
            }
        )
        // Obsługa stanu rejected:
        .catch((err) => {
            console.log(err);
        })
}

// Wywołanie funkcji zbiorczej:
przetwarzanie(-1); // przetestować dla różnych wartości danej wejściowej

