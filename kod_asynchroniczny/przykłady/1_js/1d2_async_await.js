/*  JAVASCRIPT.
    Kod asynchroniczny (asynchronous code).
    Funkcje async i await.
    Stos wywołań funkcji (function call stack).

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/


/* UWAGA
    TEMAT TEN NALEŻY REALIZOWAĆ PO CALLBACKACH I PROMISACH!
 */

// DEFINICJE FUNKCJI ASYNCHRONICZNYCH:
let f1 = async () => {
    console.log('Komunikat z funkcji f1() ...');

    const temp = 1;
    return Promise.resolve(temp); // funkcja zwraca spełnionego promisa
}

let f2 = async function() {
    console.log('Komunikat z funkcji f2() ...');
    return 2; // funkcja zwraca literał liczbowy
}

async function f3() {
    console.log('Komunikat z funkcji f3() ...');

    let temp = 3;
    // Użycie funkcji await:
    return await temp; // funkcja zwraca wartość zmiennej
    /* UWAGA
       Funkcja await oczekuje na promisa - czeka, aż promis zwroci wartość.
     */
}
/* UWAGA
    Wszystkie zdefiniowanej powyżej funkcje są asynchroniczne dzięki wykorzystaniu
    słowa kluczowego 'async'. Każda z nich jest w pełni niezależna od innej.
 */


// WYWOŁANIA ZDEFINIOWANYCH FUNKCJI ASYNCHRONICZNYCH:
f1()
    .then((value) => {
        console.log("Wartość zwrócona przez f1(): ", value);
    }
);
f2()
    .then((value) => {
        console.log("Wartość zwrócona przez f2(): ", value);
    }
);
f3()
    .then((value) => {
        console.log("Wartość zwrócona przez f3(): ", value);
    }
);
/* UWAGA
    Każda z funkcji asynchronicznych 'async' zwraca promisa.
    Zatem, można go obsłużyć przy wykorzystaniu funkcji then().
    Tutaj wykorzystanie then() odpowiada obietnicy spełnionej (onfulfilled).
 */


/* UWAGA
    Rezyltat wykonania aplikacji jest następujący:
    Komunikat z funkcji f1() ...
    Komunikat z funkcji f2() ...
    Komunikat z funkcji f3() ...
    Wartość zwrócona przez f2():  2
    Wartość zwrócona przez f3():  3
    Wartość zwrócona przez f1():  1

    Funkcje f1(), f2() i f3() są kolejno umieszczane na stosie wywołań funkcji.
    Po umieszczeniu danej funkcji na stosie wykonywany jest kod synchroniczny
    zawarty w ich blokach, czyli wyświetlenie komunikatów:
    Komunikat z funkcji f1() ...
    Komunikat z funkcji f2() ...
    Komunikat z funkcji f3() ...
    Po wykonaniu kodu synchronicznego w danej funkcji, jest ona usuwana ze stosu.
    Wynika to z tego, że funkcje f1(), f2() i f3() są od siebie niezależne -
    żadna z nich nie jest funkcją nadrzędną (wywołującą) dla innej.

    Następnie, w wyniku działania pętli zdarzeń funkcje są ponownie kolejno umieszczane
    na stosie wywołań funkcji i dopiero wówczas wykonywany jest kod asynchroniczny.
    Po wykonaniu kodu asynchronicznego zawartego w danej funkcji, jest ona usuwana ze stosu:
    Wartość zwrócona przez f2():  2
    Wartość zwrócona przez f3():  3
    Wartość zwrócona przez f1():  1
    Funkcja f2() jest wykonywana do końca jako pierwsza, ponieważ zwraca wartość,
    bez oczekiwania na spełnienie obietnicy.
    Funkcja f3() jest wykonywana po f2().
    Na końcu wykonywana jest funkcja f1(), co wynika z wykorzystania funkcji await,
    która oczekuje na spełnienie promisa.
 */