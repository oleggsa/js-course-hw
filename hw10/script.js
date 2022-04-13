let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null || numOrStr.trim() === '' || isNaN( +numOrStr )) {
    console.log('вы отменили')
} else {
    console.log('OK!')
}