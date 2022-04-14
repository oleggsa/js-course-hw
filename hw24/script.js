// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.

let arr1 = ['a', 'b', 'c', 'd']
console.log(`${arr1[0]}+${arr1[1]},${arr1[2]}+${arr1[3]}`)

// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй,
// а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной

let arr2 = [2, 5, 3, 9]
let result = arr2[0]*arr2[1]+arr2[2]*arr2[3]
console.log(result)

// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

let arr3 = [[1,2,3], [4,5,6], [7,8,9]]
console.log(arr3[1][0])

// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.

let obj1 = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
console.log(obj1.js[0])

// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.

let arr4 = []
function x(num){
    let subres = ''
    for (let i = num; i > 0; i--){
        subres += `x`
        arr4.push(subres)
    }
}
x(5)
console.log(arr4)

// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.

let arr5 = []
function dig(num){
    let subres = ''
    let counter = 1
    for (let i = num; i > 0; i--){
        let subres = ''
        for (let j = counter; j > 0; j--){
            subres += counter
        }
        counter++
        arr5.push(subres)
    }
}
dig(5)
console.log(arr5)

// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция
// принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
// Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].

let arr6 = []
function sym(symb, num){
    let subres = ''
    for (let i = num; i > 0; i--){
        arr6.push(subres + symb)
    }
}
sym('*', 10)
console.log(arr6)

// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

let arr7 = [1, 2, 1, 3, 4, 6, 8]

function howMuch(arr){
    if (arr.length === 0) return null

    let count = 0
    let summ = 0

    for (let i = 0; i < arr.length; i++){
        if (summ > 10) break
        summ += arr[i]

        count++
    }
    return count
}

console.log(howMuch(arr7))

// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

arr8 = [1, 2, 3, 4, 5, 6, 7]

function revert(arr){
    let revArr = []
    for (let i = 0; i < arr.length; i++){
        revArr.unshift(arr[i])
    }
    return revArr
}

console.log(revert(arr8))

// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива.
// Массив, конечно же, может быть произвольным.

let arr9 = [[1, 2, 3], [4, 5], [6]]
let summ1 = arr9.flat().reduce(function (acc, item){
    acc += item
    return acc
}, 0)
console.log(summ1)

// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива.
// Массив, конечно же, может быть произвольным.

let arr10 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
let summ2 = arr10.flat().flat().reduce(function (acc, item){
    acc += item
    return acc
}, 0)
console.log(summ2)