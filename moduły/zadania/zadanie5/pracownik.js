class Pracownik{
    constructor(imie, nazwisko, staz){
        this._imie = imie;
        this._nazwisko= nazwisko;
        this._staz = staz;
    }

    wypiszDane = () =>{
        return `Imie: ${this._imie}, nazwisko: ${this._nazwisko}, staż: ${this._staz} lat/a`
    }
}

module.exports.pracownik = Pracownik