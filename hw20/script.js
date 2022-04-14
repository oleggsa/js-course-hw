function counter(amountOfBorshch){
    const oneLiter = 0.3;
    const priceOfKartoshka = 13;
    const amountOfKartoshka = amountOfBorshch * oneLiter;
    const summ = amountOfKartoshka * priceOfKartoshka;
    return summ + ' грн надо на ' + amountOfKartoshka + ' кг картошки для ' + amountOfBorshch + ' литров борща'
}

console.log(counter(50));