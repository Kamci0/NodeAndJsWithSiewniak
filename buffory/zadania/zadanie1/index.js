const buffer = Buffer.alloc(16);


process.stdin.setEncoding('utf8');
process.stdin.on(
    'readable', 
    ()=>{
        const chunk = process.stdin.read();
        if (chunk !== null) {
            buffer.write(chunk);
            console.log('\n' + " Wynik " + '\n');
            if(!isNaN(parseInt(buffer.toString()))){
                console.log(buffer.toString());
            }
        }
})