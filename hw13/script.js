// let x = 10, y = 7;
// x > y ? alert('x > y') : alert('x < y')

// let num = prompt('Enter num')
// if (num % 2 === 0) {
//     console.log(num + ' - even')
// } else {
//     console.log(num + ' - odd')
// }

// let num2 = +prompt('Enter num2')
// if (num2 === null || isNaN(num2)){
//     console.log('NaN')
// } else if (num2 >= 0){
//     let length = num2.toString().length;
//     console.log(length)
//     switch (length) {
//         case 1:
//             console.log('1 digit positive')
//             break
//         case 2:
//             console.log('2 digits positive')
//             break
//         default:
//             console.log('3 or more digits positive')
//     }
// } else {
//     let length = num2.toString().length;
//     console.log(length)
//     switch (length) {
//         case 1:
//             console.log('1 digit negative')
//             break
//         case 2:
//             console.log('2 digits negative')
//             break
//         default:
//             console.log('3 or more digits negative')
//     }
// }

// let a = +prompt('a')
// let b = +prompt('b')
// let c = +prompt('c')
//
// if(a > b && a > c){
//     console.log(a)
// } else if (a < b && c < b){
//     console.log(b)
// } else {
//     console.log(c)
// }

let a = +prompt('a')
let b = +prompt('b')
let c = +prompt('c')

if (a + b < c || a + c < b || b + c < a){
    console.log('No way!')
} else {
    console.log('Can exist!')
}