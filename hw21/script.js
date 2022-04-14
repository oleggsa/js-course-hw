function mainFunction(callback){
    let num1 = +prompt('First num')
    let num2 = +prompt('Second num')
    callback(num1, num2)
}

function exponentiation(num1, num2){
    let result = num1**num2;
    return alert('Result of exp is ' + result)
}
function multiplay(num1, num2){
    let result = num1*num2
    return alert('Result of multiplay is ' + result)
}
function division(num1, num2){
    let result = num1/num2;
    return alert('Result of division is ' + result)
}
    function modulo(num1, num2){
        let result = num1%num2;
        return alert('Result of modulo is ' + result)
    }

// mainFunction(exponentiation)
// mainFunction(multiplay)
// mainFunction(division)
// mainFunction(modulo)