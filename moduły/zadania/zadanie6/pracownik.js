class Pracownik{
    constructor(imie, nazwisko, staz){
        this._imie = imie;
        this._nazwisko= nazwisko;
        this._staz = staz;
    }

    wypiszDane(){
        return `Imie: ${this._imie}, nazwisko: ${this._nazwisko}, staż: ${this._staz} lat/a`
    }
}

class Lekarz extends Pracownik{
    constructor(imie, nazwisko,staz,specjalizacja){
        super(imie,nazwisko,staz);
        this._specjalizacja = specjalizacja;
    }
    wypiszDane = () =>{
        return `Lekarz\n${super.wypiszDane()}, specjalizacja ${this._specjalizacja}`
    }
}

class Pielegniarka extends Pracownik{
    constructor(imie,nazwisko,staz, oddzial){
        super(imie,nazwisko,staz);
        this._oddzial = oddzial;
    }

    wypiszDane = () =>{
        return `Pielegniarka\n${super.wypiszDane()}, odzial: ${this._oddzial}`
    }
}

class Ordynator extends Pracownik{
    constructor(imie,nazwisko,staz,oddzial){
        super(imie,nazwisko,staz);
        this._oddzial = oddzial;
    }
    wypiszDane = () =>{
        return `Odrynator\n${super.wypiszDane()}, ordynuje na odziale: ${this._oddzial}`
    }
}
module.exports = {Pracownik, Lekarz, Pielegniarka, Ordynator}