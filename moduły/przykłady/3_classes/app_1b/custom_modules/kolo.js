/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport klas.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Definicja klasy Kolo:
class Kolo  {
    constructor(r) {
        this._r = r;
    }
    // Deklaracje metod instancyjnych - wykorzystanie składni funkcji strzałkowych:
    poleKolo = () => {
        return (Math.PI * Math.pow(this._r, 2));
    }
    obwodKolo = () => {
        return (2 * Math.PI * this._r);
    }
    /* UWAGA
        Funkcje strzałkowe - w przeciwieństwie do zwykłych funkcji -
        nie posiadają własnego this.
        Funkcje strzałkowe używają this w zależności od kontekstu wywołania.
        Tutaj: this oznacza obiekt stanowiący instancję klasy Kolo.
     */
}

// Eksport klasy Kolo jako zasobu publicznego modułu kolo:
exports.Kolo = Kolo;
/* UWAGA
    Klasa Kolo została wyeksportowana jako właściwość obiektu exports.
 */