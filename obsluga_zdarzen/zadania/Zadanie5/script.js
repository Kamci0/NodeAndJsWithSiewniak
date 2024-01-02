const events = require('events');
const fs = require('fs');

const emiter = new events.EventEmitter();
const event_name = 'event_name';

const fileName = 'liczby.txt';

function obliczenia(a,b,c){
    return Math.sqrt(a*b*c)
}

emiter.on(
    event_name,
    (a,b,c)=>{
        try{
            if(isNaN(a)) throw 'A nie jest liczbą';
            if(isNaN(b)) throw 'B nie jest liczbą';
            if(isNaN(c)) throw 'C nie jest liczbą';

            if(a <= 0) throw 'A jest mniejsze od 0';
            if(b <= 0) throw 'B jest mniejsze od 0';
            if(c <= 0) throw 'C jest mniejsze od 0';

            console.log(`Średnia geometryczna tych liczb to => ${obliczenia(a,b,c)}`);
        }
        catch(err){
            console.log(`Błąd!!!\n${err}`);
        }
    }
)

fs.readFile(
    fileName,
    'utf8',
    (err,data)=>{
        try{
            if(err) throw 'Błąd w odczycie pliku';
            const temp = data.toString().split(',');
            emiter.emit(event_name, temp[0], temp[1], temp[2]);
        }
        catch(err){
            console.log(`Błąd!!\n${err}`)
        }
    }
)