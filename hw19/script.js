const arr = [1, 2, 3, -1, -2, -3];

function positiveArr(arr){
    const newArr = [];
    if (!arr.length) {
        return 'Empty array'
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0){
            newArr.push(arr[i])
        }
    }
    if (!newArr.length){
        return 'No positive numbers as no positive in your life'
    }
    return newArr;
}

console.log(positiveArr(arr))