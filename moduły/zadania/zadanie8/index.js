const pracownik = require("./pracownik");

const Pracownik = pracownik.Pracownik;
const Lekarz = pracownik.Lekarz;

const p1 = new Pracownik("kamil", "toKoks",6);
const l1 = new Lekarz("Choroby zakaźne")
l1._imie = "Ludwik";
l1._nazwisko = "Jabłoński"
l1._staz = 6;

console.log(p1.zwrocDanePracownika())
console.log(l1.zwrocDanePracownika() + l1.zwrocSpecjalizacje())