const pracownik = require("./pracownik");

const Pracownik = pracownik.Pracownik;
const Lekarz = pracownik.Lekarz;
const Pielegniarka = pracownik.Pielegniarka;
const Ordynator = pracownik.Ordynator;

const tab = [
    new Pracownik("Bartosz", "Boczkowski", 7),
    new Lekarz("Michał", "Schabowski", 6, "Kardiologia"),
    new Pielegniarka("Anna", "Michałek", 2, "Pediatria"),
    new Ordynator("Grzegorz", "Filetowski", 12, "Choroby zakaźne")
]

tab.forEach(p => {
    console.log(p.wypiszDane())
});