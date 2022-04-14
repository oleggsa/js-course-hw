function padString(str, length, symbol = '', bool = true){
    if (typeof str !== 'string' || str === '' || str === null){
        console.log('not string')
    } else if (typeof length !== 'number'|| length <= 0 || length === null){
        console.log('wrong num')
    } else if (typeof symbol !== 'string' || symbol === null){
        console.log('what?')
    } else if (typeof bool !== 'boolean'){
        console.log('stupid kek, BOOLEAN')
    } else {
        let numOfSym = length - str.length;
        let symbols = '';
        let result;
        if (numOfSym === 0) {
            return str;
        } else if (numOfSym > 0){
            for(let i=0; i < numOfSym; i++){
                symbols += symbol
            }
            if (bool === true){
                result = str + symbols
            }
            if (bool === false){
                result = symbols + str
            }
        } else {
            result = str.substr(0, length)
        }
        return result
    }
}

console.log(padString('hello123', 11, '*', false));
console.log(padString('hello', 5));
console.log(padString('zubsero', 3));