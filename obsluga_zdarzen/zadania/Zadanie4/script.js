const events = require("events");

const emiter = new events.EventEmitter();
const event_name = 'event_name';

function oblicz(a,b,c,d){
    return (a+b) / (c+d);
}

emiter.on(
    event_name,
    (a,b,c,d)=>{
        try{
            if(isNaN(a)) throw 'A nie jest liczbą';
            if(isNaN(b)) throw 'B nie jest liczbą';
            if(isNaN(c)) throw 'C nie jest liczbą';
            if(isNaN(d)) throw 'D nie jest liczbą';

            if(c == 0) throw 'C nie może być równe ZERO';
            if(d == 0) throw 'D nie może być równe ZERO';
            
            if(!Number.isInteger(a)) throw 'A nie jest liczbą całkowitą';
            if(!Number.isInteger(b)) throw 'B nie jest liczbą całkowitą';
            if(!Number.isInteger(c)) throw 'C nie jest liczbą całkowitą';
            if(!Number.isInteger(d)) throw 'D nie jest liczbą całkowitą';

            console.log(`Wynik wyrażenia to => ${oblicz(a,b,c,d)}`)
        }
        catch(err){
            console.log(`Błąd!! ${err}`);
        }
    }
)

emiter.emit(event_name, 5,5,2,2)