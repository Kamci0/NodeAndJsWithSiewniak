function obliczObjetosc(a,b,c){
    return a*b*c;
}

function obliczPoleP(a,b,c){
    return 2 * (a*b) + 2 * (b*c) + 2 * (a*c); 
}

function obliczSumeK(a,b,c){
    return 4*a + 4*b + 4*c;
}

module.exports = {obliczObjetosc, obliczPoleP, obliczSumeK}