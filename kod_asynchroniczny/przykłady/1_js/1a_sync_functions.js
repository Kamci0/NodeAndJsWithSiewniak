/*  JAVASCRIPT.
    Kod synchroniczny (synchronous code).

    © Piotr Siewniak, wersja: 7.II.2022 r.
*/

/* UWAGA
    TEMAT TEN NALEŻY REALIZOWAĆ PO CALLBACKACH I PROMISACH!
 */

/* UWAGA
    JavaScript jest językiem jednowątkowym (single threaded). Oznacza to, że w danej chwili
    może być wykonywana tylko jedna operacja.
    Tym samym, w programie synchronicznym kolejna (następna) operacja (np. wykonywanie funkcji)
    może się rozpocząć dopiero po zakończeniu wykonywania poprzedniej operacji (np. funkcji).

    Można jednak również programować w JS używając technik asynchronicznych,
    w których rozpoczęcie jednej operacji (ale nie jej zakończenie) nie wyklucza
    rozpoczączęcia realizacji innej operacji.
    Dlatego też, w tym samym czasie, w programach asynchronicznych różne operacje
    (np. wykonywanie różnych funkcji) mogą być realizowane niezależnie od innych.

    Asynchroniczność w JS można programować przy wykorzystaniu:
    1) funkcji zwrotnych (callback) skojarzonych z Web API (np. setTimeout());
    2) promisów;
    3) funkcji async, await.
 */

// DEFINICJE FUNKCJI SYNCHRONICZNYCH:
function f1() {
    return console.log('Komunikat z funkcji f1() ...');
}

let f2 = function() {
    return console.log('Komunikat z funkcji f2() ...');
}

let f3 = () => {
    return console.log('Komunikat z funkcji f3() ...');
}
/* UWAGA
    Wszystkie funkcje zdefiniowane w aplikacji są zwykłymi funkcjami synchronicznymi.
    Nie ma w nich żadnych elementów asynchronicznych, np. promisów, interfejsów Web API
    (np. setTimeout()).
*/

// Wywołania zdefiniowanych funkcji w zadanej kolejności:
f1();
f2();
f3();

/* UWAGA
    Funkcje zdefiniowane w aplikacji są wykonywane kolejno, sekwencyjnie - jak w kodzie
    źródłowym.
    Są one kolejno umieszczane na stosie wywołań funkcji (function call stack),
    wykonywane, a następnie z niego usuwane.
 */
