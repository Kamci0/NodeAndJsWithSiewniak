const events = require('events');
const fs = require('fs');

const emiter = new events.EventEmitter();
const event_name = 'event_name';

const fileName = 'plik.txt';

emiter.on(
    event_name,
    (text, input) => {
        try{
            if(text == "") throw 'Plik jest pusty';
            if(input == "") throw 'Nie podano tekstu';
            var temp = text + input + ' ';
            fs.writeFile(
                fileName,
                temp,
                (err) => {
                    if(err){
                        throw 'Błąd zapisu do pliku'
                    }
                }
            )
        }
        catch(err){
            confirm.console.log(`Błąd!!! ${err}`);
        }
    }
)

fs.readFile(
    fileName,
    'utf8',
    (err, data) =>{
        try{
            if(err) throw 'Błąd w otwarciu pliku';
            emiter.emit(event_name, data.toString(), 'siema');
        }
        catch(err){
            console.log(`Błąd!! ${err}`)
        }
    }
)