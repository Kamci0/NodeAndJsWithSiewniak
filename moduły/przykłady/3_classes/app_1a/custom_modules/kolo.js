/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport klas.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Definicja klasy Kolo w formie deklaracji:
class Kolo  {
    // Deklaracja konstruktora:
    constructor(r) {
        // Deklaracja i inicjalizacja właściwości instancyjnej _r:
        this._r = r;

        // Definicja metody instancyjnej:
        this.obwodKolo = function() {
            return (2 * Math.PI * this._r);
        }
        /* UWAGA
            Konstruktor może zawierać również definicje metod instancyjnych.
            Tutaj: metodę obwodKolo() zdefiniowano przy wykorzystaniu wyrażenia
            funkcyjnego (function expression) - funkcji anonimowej (anonymous function).
           */
    }

    // Deklaracja metody instancyjnej na zewnątrz konstruktora:
    poleKolo() {
        return (Math.PI * Math.pow(this._r, 2));
    }
    /* UWAGA
        W ogólności, metody instancyjne mogą być definiowane zarówno wewnątrz konstruktora,
        jak również niezależnie od konstruktora.
      */
}

// Eksport klasy Kolo jako zasobu publicznego modułu kolo:
module.exports = {
    Kolo
}
/* UWAGA
    Klasa Kolo została wyeksportowana jako zawartość właściwości (obiektu) exports
    obiektu module.
 */