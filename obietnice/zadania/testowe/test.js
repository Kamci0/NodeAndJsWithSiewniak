function check(a, b){
    const promise = new Promise(
        (resolve, reject) => {
            if(a>=b){
                resolve([a,b])
            }else{
                reject(new Error("Pierwsza liczba musi być większe od drugiej"))
            }
        }
    );
    return promise;
}

function wyswietl(check_callback, z, y){
    const promise = check_callback(z,y);
  
    promise
        .then(([a,b])=>{
            console.log(a-b);
        })
        .catch((err)=>{
            console.log(err)
        })
}

console.log("przed")
wyswietl(check, 10,2)
console.log("po")
