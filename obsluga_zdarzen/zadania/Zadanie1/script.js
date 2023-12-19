const events = require('events')

const emiter = new events.EventEmitter();
const event_name = 'event_name';

function Pole(p){
    return Math.PI * Math.pow(p, 2);
}
function Obwod(p){
    return 2 * Math.PI * p;
}

emiter.on(
    event_name,
    (promien) =>{
        try{
            if(isNaN(promien)) throw 'Dana nie jest liczbą';
            if(promien <= 0 ) throw 'Dana jest mniejsza od zera';
            console.log(`Pole wynosi => ${Pole(promien)} \nObwód wynosi => ${Obwod(promien)}`);
        }
        catch(err){
            console.log(`Błąd!!! \n${err}`)
        }
    }
)

emiter.emit(event_name, 1);