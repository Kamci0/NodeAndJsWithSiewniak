class Prostopadloscian{

    constructor(a,b,c){
        this._a=a;
        this._b=b;
        this._c=c;
    }

    obliczObjetosc = async function(){
        return await this._a * this._b * this._c;
    }

    obliczPoleP = async function(){
        return await this._a * this._b * 2 + this._b*this._c * 2 + this._c * this._a; 
    }

    obliczSumeK = async function(){
        return await 4 * this._a + 4 * this._b + 4 * this._c;
    }

    wyswietlDane = async function(objetosc, poleP, sumaK){
        console.log(`Objętość -> ${await objetosc}`);
        console.log(`Pole powierzchni całkowitej -> ${await poleP}`)
        console.log(`Suma krawędzi -> ${await sumaK}`)
    }
}