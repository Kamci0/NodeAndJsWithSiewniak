process.stdout.write("Komunikat z pierwszej linii kodu aplikacji ...\n");

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => { 
    let chunk; 
    // Use a loop to make sure we read all available data. 
    while ((chunk = process.stdin.read()) != null) { 
     process.stdout.write(`data: ${chunk}`); 
    } 
});
