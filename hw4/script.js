const act = prompt('add, sub, mult, div');
const a = prompt('a')
const b = prompt('b')

switch (act){
    case 'add':
        console.log(a + " + " + b + " = " + (+a + +b));
        break;
    case 'sub':
        console.log(a + " - " + b + " = " + (a - b));
        break;
    case 'mult':
        console.log(a + " * " + b + " = " + (a * b));
        break;
    case 'div':
        console.log(a + " / " + b + " = " + (a / b));
        break;
    default:
        console.log('Che???')
}