// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
console.log(arr1.concat(arr2))

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

let arr3 = [1, 2, 3]
console.log(arr3.reverse());

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

let arr4 = [1, 2, 3]
arr4.push(4, 5, 6)
console.log(arr4);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

let arr5 = [1, 2, 3]
arr5.unshift(4, 5, 6)
console.log(arr5)

// 5. Дан массив [‘js’, ‘css’, ‘jq’]. Выведите на экран первый элемент.

arr6 = ['js', 'css', 'jq'];
console.log(arr6[0])

// 6. Дан массив [‘js’, ‘css’, ‘jq’]. Выведите на экран последний элемент.

arr7 = ['js', 'css', 'jq'];
console.log(arr7[arr7.length-1])

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [1, 2, 3].

let arr8 = [1, 2, 3, 4, 5]
let newArr1 = arr8.slice(0, 3)
console.log(newArr1)

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [4, 5].

let arr9 = [1, 2, 3, 4, 5]
let newArr2 = arr9.slice(-2)
console.log(newArr2)

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода преобразуйте массив в [1, 4, 5].

let arr10 = [1, 2, 3, 4, 5]
arr10.splice(1, 2)
console.log(arr10)

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода запишите в новый массив элементы [2, 3, 4].

let arr11 = [1, 2, 3, 4, 5]
let newArr3 = arr11.splice(1, 3)
console.log(newArr3)

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, 2, 3, ‘a’, ‘b’, ‘c’, 4, 5].

let arr12 = [1, 2, 3, 4, 5]
arr12.splice(3, 0, 'a', 'b', 'c')
console.log(arr12)

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода сделайте из него массив [1, ‘a’, ‘b’, 2, 3, 4, ‘c’, 5, ‘e’].

let arr13 = [1, 2, 3, 4, 5]
arr13.splice(1, 0, 'a', 'b')
arr13.splice(6, 0, 'c')
arr13.push('e')
console.log(arr13)

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

let arr14 = [3, 4, 1, 2, 7]
arr14.sort();
console.log(arr14)

// 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.

let arr15 = [5, 6, 7, 8, 9]
let result = arr15.reduce(function (acc, item){
    acc += item
    return acc
}, 0)
console.log(result)

// 15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.

let arr16 = [5, 6, 7, 8, 9]
let arrPow = arr16.map(function (item){
    return item**2
})
console.log(arrPow)

// 16. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.

let arr17 = [1,-3, 5, 6,-7, 8, 9,-11]
let newArr4 = arr17.filter(function (item){
    return item < 0 ? item : null
})
console.log(newArr4)

// 17. Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только четные числа.

let arr18 = [1,-3, 5, 6,-7, 8, 9,-11]
let newArr5 = arr18.filter(function (item){
    return item % 2 === 0 ? item : null
})
console.log(newArr5)

// 18. Дан массив со строками [‘aaa’, ‘aaaqqq’, ‘zzzqq’, ‘zz’, ‘qsaa’, ‘q’, ‘az’]. Оставьте в нем только те строки, длина которых больше 5-ти символов.

let arr19 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az']
let newArr6 = arr19.reduce(function (acc, item){
    item.length <= 5 ? acc.push(item) : null
    return acc
}, [])
console.log(newArr6)

// 19. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.

let arr20 = [1, 2, [3, 4], 5, [6, 7]]
let newArr7 = arr20.reduce(function (acc, item){
    Array.isArray(item) ? acc.push(item) : null
    return acc
}, [])
console.log(newArr7)

// 20. Дан массив с числами [5,-3, 6,-5, 0,-7, 8, 9]. Посчитайте количество отрицательных чисел в этом массиве.

let arr21 = [5, -3, 6, -5, 0,-7, 8, 9]
let numOfNeg = arr21.reduce(function (acc, item){
    item < 0 ? acc++ : null
    return acc
}, 0)
console.log(numOfNeg)