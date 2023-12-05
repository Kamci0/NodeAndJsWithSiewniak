/*  NODE.JS BUFFERS

    © Piotr Siewniak, wersja: 12.IV.2022 r.
*/

// Utworzenie bufora o rozmiarze 16 bajtów (oktetów):
const buffer = Buffer.alloc(16);

// Zmienna pomocnicza:
const stringData = "Node.js Buffers";

// Zapis danych do obiektu buffer:
buffer.write(
    stringData, // zapisywany łańcuch znaków
    0, // pozycja początkowa (0 - domyślnie)
    16, // liczba zapisywanych bajtów
    'utf8' // system kodowania znaków
);
/* UWAGA
    Metoda write() z modułu buffer pozwala na zapis łańcucha znaków w buforze.
 */

// Wyświetlenie wartości bufora buffer:
console.log("buffer: ", buffer);

// Konwersja bufora na łańcuch znaków (string):
let dataString = buffer.toString();
console.log("dataString: ", dataString);

// Konwersja bufora na obiekt JSON:
let dataJSON = buffer.toJSON();
console.log("dataJSON: ", dataJSON);

