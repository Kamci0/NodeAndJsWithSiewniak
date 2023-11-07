class Prostopadloscian{

    constructor(a,b,c){
        this._a=a;
        this._b=b;
        this._c=c;
    }

    obliczObjetosc = function(){
        return this._a * this._b * this._c;
    }

    obliczPoleP = function(){
        return this._a * this._b * 2 + this._b*this._c * 2 + this._c * this._a; 
    }

    obliczSumeK = function(){
        return 4 * this._a + 4 * this._b + 4 * this._c;
    }

    wyswietlDane = function(objetosc, poleP, sumaK){
        console.log(`Objętość -> ${objetosc}`);
        console.log(`Pole powierzchni całkowitej -> ${poleP}`)
        console.log(`Suma krawędzi -> ${sumaK}`)
    }
}