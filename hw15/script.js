let primeNum = +prompt('Num?')
let dividers = 0;
for (let i = 0; i <= primeNum; i++){
    if (primeNum%i === 0) {
        dividers++
    }
}
if (dividers > 2){
    console.log('Shet, no way')
} else {
    console.log('is prime')
}