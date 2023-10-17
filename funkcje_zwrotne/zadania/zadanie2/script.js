function obliczPremieDyrektora(pensja){
    return pensja * 3
}

function obliczPremieKierownika(pensja){
    return pensja;
}

function obliczPremieSekretarki(pensja){
    return pensja * 0.5
}

function obliczPensjeIPremie(liczbaGodzin, stawkaGodzinowa, callback){
    let pensja = liczbaGodzin * stawkaGodzinowa;
    let premia = callback(pensja)
    return `Pensja: ${pensja}, premia: ${premia}, co łącznie daje: ${pensja + premia}`
}

console.log(`Dyrektor ${obliczPensjeIPremie(50, 31, obliczPremieDyrektora)}`)
console.log(`Kierownik ${obliczPensjeIPremie(75, 29, obliczPremieKierownika)}`)
console.log(`Sekretarka ${obliczPensjeIPremie(85, 27, obliczPremieSekretarki)}`)