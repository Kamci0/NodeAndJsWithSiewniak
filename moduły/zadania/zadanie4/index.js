const prostopadloscian = require("./prostopadloscian");

const Prostopadloscian = prostopadloscian.Prostopadloscian;

const p = new Prostopadloscian(4,9,2);

console.log(`Objetość to: ${p.obliczObjetosc()}`)
console.log(`Pole powierzchni to: ${p.obliczPoleP()}`)
console.log(`Suma krawędzi to: ${p.obliczSumeK()}`)