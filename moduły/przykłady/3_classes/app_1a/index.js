/* NODE.JS MODULES
    Moduły lokalne (moduły zdefiniowane przez programistę).
    Eksport klas.

    © Piotr Siewniak, wersja: 30.X.2021 r.
*/

// Dołączenie do aplikacji zasobów publicznych modułu kolo:
const f = require('./custom_modules/kolo');
console.log("f:", f); // test
console.log("typeof f:", typeof f); // test

const r = 1; // promień koła

// Skopiowanie klasy (konstruktora) klasy f.Kolo:
const Kolo = f.Kolo;
/* UWAGA
    Nowa klasa Kolo została utworzona na podstawie klasy f.Kolo.
 */
console.log("f.Kolo: ", f.Kolo); // test
console.log("typeof f.Kolo: ", typeof f.Kolo); // test
console.log("Kolo: ", Kolo); // test
console.log("typeof Kolo: ", typeof Kolo); // test
/* UWAGA
    Typ f.Kolo oraz Kolo został zidentyfikowany za pomocą typeof
    jako funkcje. Wynika to z faktu, że w JS klasy stanowią szczególny
    rodzaj funkcji.
 */

// Utworzenie nowego obiektu k1, jako instancji klasy Kolo:
const k1 = new Kolo(r);

console.log("Promień: ", r);
console.log("Pole = ", k1.poleKolo());
console.log("Obwód = ", k1.obwodKolo());

//===================================================
// Testy pomocnicze:
k1.dodatkowa = 1; // dodanie nowej właściwości do obiektu k1
console.log("k1: ", k1);

const k2 = new f.Kolo(2);
console.log("k2: ", k2);
/* UWAGA
    Przeprowadzone testy wykazały, że klasy Kolo i f.Kolo
    są od siebie niezależne.
 */

