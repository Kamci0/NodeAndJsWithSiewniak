function Pracownik(imie,nazwisko,staz){
    this._imie = imie;
    this._nazwisko = nazwisko;
    this._staz=staz;

    this.zwrocDanePracownika = function(){
        return `Imie: ${this._imie}, nazwisko: ${this._nazwisko}, staz: ${this._staz} lat/a`
    }
}

function Lekarz(specjalizacja){
    this._specjalizacja = specjalizacja;

    this.zwrocSpecjalizacje = function(){
        return `, specjalizacja: ${this._specjalizacja}`
    }
}

Lekarz.prototype = new Pracownik;

module.exports = {Pracownik, Lekarz}