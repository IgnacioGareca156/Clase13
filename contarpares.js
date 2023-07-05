function ContarImpares(numero) {
    let par = 0;
    for (let i = 0 ; i<= numero ; i++){
        if(i % 2 == 0){
        par++;
        }
        }
    return par;
}
console.log(ContarImpares(50));    