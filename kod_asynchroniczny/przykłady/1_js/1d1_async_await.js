/*  JAVASCRIPT.
    Kod asynchroniczny (asynchronous code).
    Funkcje async i await.
    Stos wywołań funkcji (function call stack).

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/

/* UWAGA
    TEMAT TEN NALEŻY REALIZOWAĆ PO CALLBACKACH I PROMISACH!
 */

/* UWAGA
    Funkcja (słowo kluczowe) async definiuje funkcję asynchroniczną.
    Funkcja asynchroniczna to taka funkcja, która działa asynchronicznie,
    tzn. może być wykonywana niezależnie od innych funkcji.
    Asynchroniczność jest osiągana za pośrednictwem pętli zdarzeń (event loop).
    Funkcja async zwraca obietnicę (promisa).

    Funkcja async umożliwia pisanie funkcji asynchronicznych w taki sam sposób,
    jak zwykłych funkcji synchronicznych.
    Funkcje asynchroniczne 'async' zwracają promisa. Dlatego też, można go obsłużyć
    przy wykorzystaniu funkcji then().
    Tutaj - wykorzystanie then() odpowiada stanowi resolved - obietnica jest
    spełniona (fulfilled).

    Blok funkcji async może zawierać wywołanie funkcji await, co pozwala na wstrzymanie
    wywołania funkcji asynchronicznej i oczekiwanie na promisa - po czym następuje wznowienie
    działania funkcji async.
    Innymi słowy, funkcja await oczekuje na promisa - w szczególności czeka, aż promis zwroci
    zadaną wartość. Funkcja ta może występować jedynie w bloku async.
 */

// DEFINICJE FUNKCJI ASYNCHRONICZNYCH
async function f1() {
    console.log('Komunikat z funkcji f1() ...');
    return await 1; // Uwaga! Jedynie w bloku f1() występuje 'await' !
}

let f2 = async function () {
    console.log('Komunikat z funkcji f2() ...');
    return 2;   // funkcja zwraca literał liczbowy
                // równoważne Promise.resolve(2) (utworzenie spełnionego promisa)
}

let f3 = async () => {
    console.log('Komunikat z funkcji f3() ...');
    return 3;   // funkcja zwraca literał liczbowy
                // równoważne Promise.resolve(3)
}
/* UWAGA
    Wszystkie zdefiniowanej powyżej funkcje są asynchroniczne dzięki wykorzystaniu
    słowa kluczowego (funkcji) 'async'.
    Każda z nich jest w pełni niezależna od innej - jest to tutaj bardzo ważne!
 */

// Wywołania zdefiniowanych funkcji w zadanej kolejności:
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
    Rezultat wykonania aplikacji jest następujący:
    Komunikat z funkcji f1() ...
    Komunikat z funkcji f2() ...
    Komunikat z funkcji f3() ...
    Wartość zwrócona przez f2():  2
    Wartość zwrócona przez f3():  3
    Wartość zwrócona przez f1():  1

    Funkcje f1(), f2() i f3() są kolejno umieszczane, uruchamiane i usuwane ze stosu
    wywołań funkcji (function call stack).
    Świadczą o tym kolejne komunikaty:
    Komunikat z funkcji f1() ...
    Komunikat z funkcji f2() ...
    Komunikat z funkcji f3() ...

    Każda z tych funkcji zwraca promisa, zatem każda z nich jest funkcją asynchroniczną.
    Funkcje f2() i f3() zwracają stałe (literały) liczbowe i dlatego są ponownie umieszczane
    na stosie wywołań funkcji wcześniej niż f1().
    Mechanizm pętli zdarzeń (event loop) odpowiedzialnej za kolejność wykonywania funkcji
    pozwala na ponowne umieszczenie funkcji f1() na stosie, ale po f2() i f3() - ze względu
    na konieczność oczekiwania aż promis zwróci wartość. Wynika to z użycia w jej kodzie
    funkcji 'await':
    Wartość zwrócona przez f2():  2
    Wartość zwrócona przez f3():  3
    Wartość zwrócona przez f1():  1

 */