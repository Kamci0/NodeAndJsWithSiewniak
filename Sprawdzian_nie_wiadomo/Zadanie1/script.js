process.stdout.write("Podaj a: ");

process.stdin.on('data', (a) => {
  process.stdout.write("Podaj b: ");

  process.stdin.once('data', (b) => {
    const rectangleArea = parseFloat(a) * parseFloat(b);
    const rectanglePerimeter = 2 * (parseFloat(a) + parseFloat(b));

    process.stdout.write(`Pole prostokąta: ${rectangleArea}\n`);
    process.stdout.write(`Obwód prostokąta: ${rectanglePerimeter}\n`);

    process.exit();
  });
});