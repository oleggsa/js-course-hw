let num = +prompt('num?')

if(num <= 1){
    console.log('NaN')
} else {
    for(let i = 2; i <= num; i++){
        if(num%i === 0){
            console.log('Divider is ' + i)
            break
        }
    }
}