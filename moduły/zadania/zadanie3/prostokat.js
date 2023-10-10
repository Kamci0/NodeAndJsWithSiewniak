class Prostokat{
    constructor(a,b){
        this._a=a;
        this._b=b;
    }

    obliczPole = () =>{
        return this._a * this._b;
    }

    obliczObwod = () =>{
        return 2 * this._a + 2 * this._b
    }
}

module.exports = {Prostokat}