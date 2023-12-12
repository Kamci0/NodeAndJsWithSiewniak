let a =0;
let b =0;

function PoleProstokata(a,b){
  return a*b;
}

function ObwodProstokata(a,b){
  return 2* (a+b);
}

process.stdout.write("Podaj a: ");
process.stdin.once('data', (temp) => {
  a = parseFloat(temp);
  process.stdout.write("Podaj b: ");

  process.stdin.once('data', (temp) => {
    b = parseFloat(temp)
    process.stdout.write(`Pole prostokąta: ${PoleProstokata(a, b)}\n`);
    process.stdout.write(`Obwód prostokąta: ${ObwodProstokata(a, b)}\n`);

    process.exit();
  });
});
