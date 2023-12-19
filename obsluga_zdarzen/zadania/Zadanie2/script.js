const m = require('./przeliczanie');
const events = require('events');

const emiter = new events.EventEmitter();
const event_name = 'event_name'


emiter.on(
    event_name,
    (kg)=>{
        try{
            if(isNaN(kg)) throw 'Dana nie jest liczbą';
            if(kg <= 0 ) throw 'Dana jest mniejsza od zera';
            console.log(`Wartosc ${kg}kg jest równa ${m.KgNaFunty(kg)}lb`);
        }
        catch(err){
            console.log(`Błąd!! \n${err}`);
        }
    }
)

emiter.emit(event_name, 10);