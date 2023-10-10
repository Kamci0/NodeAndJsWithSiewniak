class Prostopadloscian{
    constructor(a,b,c){
        this._a = a;
        this._b=b;
        this._c=c;
    }

    obliczObjetosc = () =>{
        return this._a*this._b*this._c;
    }

    obliczPoleP = () =>{
        return 2 * (this._a*this._b) + 2 * (this._b*this._c) + 2 * (this._a*this._c); 
    }

    obliczSumeK = () =>{
        return 4*this._a + 4*this._b + 4*this._c;
    }

}

module.exports = {Prostopadloscian}