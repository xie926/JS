// 创建新数组


// ES5
let array1 = Array(5) // 原始方法利用Array对象
let array2 = [] // 利用对象字面量

// ES6
//1. Array.prototype.of()
let array3 = Array.of(1,2,3,4,5)
console.log(array3) // [1,2,3,4,5]


// 2. Array.prototype.fill
let array4 = Array(5).fill(7)
console.log(array4)  // [7,7,7,7,7]
// Array.fill(value,start,end)
let array5 = [1, 2, 3, 4, 5]
console.log(array5.fill(8, 2, 4))  // [1,2,8,8,5]