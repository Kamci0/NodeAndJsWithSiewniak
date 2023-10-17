const cenaPaliwa = 6.60;

function walutaPLN(a){
    return a;
}

function walutaEuro(a){
    return a / 4.44;
}

function walutaDolar(a){
    return a / 4.21
}

function walutaFrankSz(a){
    return a/ 4.67
}

function obliczCenePodrozy(dystans, spalanie ,callback){
    let spalonePaliwo = (dystans / 100) * spalanie;
    let cenaSpalonegoPaliwa =  spalonePaliwo * cenaPaliwa;
    return callback(cenaSpalonegoPaliwa);
}

console.log(`Cena w euro: ${obliczCenePodrozy(440, 8, walutaEuro)}`)
console.log(`Cena w PLN: ${obliczCenePodrozy(440, 8, walutaPLN)}`)
console.log(`Cena w Dolarach: ${obliczCenePodrozy(440, 8, walutaDolar)}`)
console.log(`Cena we Frankach Szwajcarskich: ${obliczCenePodrozy(440, 8, walutaFrankSz)}`)
