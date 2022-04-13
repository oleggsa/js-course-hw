let num = +prompt('Num')
let pow = +prompt('Pow')

let result = function powder(num, pow = 1){
    if (isNaN(num) || num === 0 || isNaN(pow) || pow === 0){
        return 'some error!'
    }
    console.log(num, pow)
    return Math.pow(num, pow)
}

alert(result(num, pow))