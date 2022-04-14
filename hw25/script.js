let arr = [1, 3, 5, 8, 5, 9]

// indexOf

function indexOf(arr, searchEl, fromIndex = 0){
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchEl){
            return i;
        }
    }
    return -1;
}

console.log(indexOf(arr, 5));

// lastIndexOf

function lastIndexOf(arr, searchEl, fromIndex = 0){
    for (let i = arr.length; i > fromIndex; i--) {
        if (arr[i] === searchEl){
            return i;
        }
    }
    return -1;
}

console.log(lastIndexOf(arr, 5));

// find

function isPrime(element, index, array) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) return false;
    }
    return element > 1;
}

let arr2 = [4, 6, 8, 9, 12, 13];

function find(arr, callback, thisArg){
    for (let i = 0; i < arr.length; i++) {
        if(!isPrime(arr[i])){
            continue
        } else {
            return arr[i]
        }
    }
    return false
}

console.log(find(arr2, isPrime));

// findIndex

function findIndex(arr, callback, thisArg){
    for (let i = 0; i < arr.length; i++) {
        if(!isPrime(arr[i])){
            continue
        } else {
            return i
        }
    }
    return false
}

console.log(findIndex(arr2, isPrime));

// includes

const pets = ['cat', 'dog', 'bat'];

function includes(arr, searchEl, fromIndex = 0){
    if (fromIndex >= arr.length) return false
    if (fromIndex < 0) fromIndex += arr.length
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchEl){
            return true
        }
    }
    return false
}

console.log(includes(pets, 'dog', -100));

// every

let arr3 = [12, 14, 58, 43, 83, 69]

function isBigEnough(element, index, array) {
    return element >= 10;
}

function every(arr, callback, thisArg){
    if(!arr.length) return true
    for (let i = 0; i < arr.length; i++) {
        if (!isBigEnough(arr[i])){
            return false
        }
    }
    return true
}

console.log(every(arr3, isBigEnough));

// some

function some(arr, callback, thisArg){
    if(!arr.length) return true
    for (let i = 0; i < arr.length; i++) {
        if (isBigEnough(arr[i])){
            return true
        }
    }
    return false
}

console.log(some(arr3, isBigEnough));
