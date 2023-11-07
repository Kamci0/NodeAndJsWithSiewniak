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

function test(a, b, c){
    const promise = new Promise(
        (resolve, reject)=>{
            if(!a){    
                reject("Nie podano a")
            }else if(!b){
                reject("Nie podano b")
            }else if(!c){
                reject("Nie podano c")
            }else if(isNaN(a)){
                reject("A musi być liczbą")
            }else if(isNaN(b)){
                reject("b musi być liczbą")
            }else if(isNaN(c)){
                reject("C musi być liczbą")
            }else if(a<=0){
                reject("A musi większe od 0")
            }else if(b<=0){
                reject("B musi większe od 0")
            }else if(c<=0){
                reject("C musi większe od 0")
            }else{
                resolve([a,b,c]);
            }

        }
    )
    return promise;
}