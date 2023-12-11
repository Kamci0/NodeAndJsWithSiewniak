const http = require('http');

const PORT = 8088;

const date = new Date();
date.setDate(20);
date.setMonth(9);
date.setFullYear(2014)
const powiaty = ["Poznański","Kaliski", "Gnieźnieński", "Kościański", "Wrzesiński"]

const data = {
    marka: "ford",
    model: "mustang",
    rok_produkcji: "2014",
    cena: "300 000",
    data_pierwszej_rejestracji: date.toLocaleDateString(),
    powiaty_w_jakich_był_rejestrowany: powiaty

}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});

    res.write(
        JSON.stringify(data)
    );
    res.end();
});

server.listen(PORT, 'localhost', () => {
    console.log(`http://localhost:${PORT}`);
});
