const pracownik = require("./pracownik")

const Pracownik = pracownik.pracownik;


const p = new Pracownik("Bartosz", "Boczkowski", 2)

console.log(p.wypiszDane())