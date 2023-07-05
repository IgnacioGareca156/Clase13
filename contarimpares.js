function ContarImpares(numero) {
    let impares = 0;
    for (let i =0 ; i<= numero ; i++){
    
    
    if(i % 2 != 0){
    impares++;
    }
    }
    return impares;
    }
console.log(ContarImpares(10));    