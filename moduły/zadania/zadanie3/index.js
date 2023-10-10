const prostokat = require("./prostokat")

const Prostokat = prostokat.Prostokat;

const p = new Prostokat(5,8)

console.log(`Pole to: ${p.obliczPole()}`)
console.log(`Obwód to: ${p.obliczObwod()}`)