const oceny = [5,3,3,4];

function wariant1(oceny){
    let suma = 0;
    let ilosc = oceny.length;
    for(i = 0 ; i < oceny.length ; i++){
        suma += oceny[i];
    }

    console.log(`Wariant 1, pętla for: ${suma / ilosc}`);
}

function wariant2(oceny){
    let i = 0;
    let suma = 0;
    let ilosc = oceny.length;
    while(i< oceny.length){
        suma += oceny[i]
        i++;
    }

    console.log(`Wariant 2, pętla while: ${suma / ilosc}`);
}

function wariant3(oceny){
    let i = 0;
    let suma = 0;
    let ilosc = oceny.length;
    do {
        suma += oceny[i]
        i++;
    }while(i < oceny.length);

    console.log(`Wariant 3, pętla do..while: ${suma / ilosc}`);
}

setTimeout(() => {wariant1(oceny)}, 1500);
setTimeout(() => {wariant2(oceny)}, 1250);
setTimeout(() => {wariant3(oceny)}, 1000);
