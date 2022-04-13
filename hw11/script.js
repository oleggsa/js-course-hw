let a = prompt('a');
let b = 5;

if (+a === 0){
    console.log('True')
} else {
    console.log('False')
}

if (+a > 0){
    console.log('True')
} else {
    console.log('False')
}

if (+a < 0){
    console.log('True')
} else {
    console.log('False')
}

if (+a >= 0){
    console.log('True')
} else {
    console.log('False')
}

if (+a <= 0){
    console.log('True')
} else {
    console.log('False')
}

if (+a !== 0){
    console.log('True')
} else {
    console.log('False')
}

if (a === 'test'){
    console.log('True')
} else {
    console.log('False')
}

if (a === '1'){
    console.log('True')
} else {
    console.log('False')
}

if (+a === 0 || +a === 2){
    alert(+a + 7)
} else {
    alert(a / 10)
}

if (+a <= 1 && +b >= 3 ){
    alert(+a + +b)
} else {
    alert(a - b)
}

if (+a > 2 && +a < 11 || +b >= 6 && +b < 14 ){
    console.log('True')
} else {
    console.log('False')
}

let num = 3;
let result;

switch (num) {
    case 1:
        result = 'Winter';
        break;
    case 2:
        result = 'Spring';
        break;
    case 3:
        result = 'Summer';
        break;
    case 4:
        result = 'Autumn';
}

console.log(result)