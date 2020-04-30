// // ES5
// let args = [].slice.call(arguments) // collection
// let imgs = [].slice.call(document.querySelectorAll('img')) // NodeList
// console.log(args)

// // ES6
// let args = Array.from(arguments)
// let imgs = Array.from(document.querySelectorAll('img'))
// imgs.forEach()

// Array.from(arrayLike,mapFn,thisArg)
let array = Array(5)
// for (let i = 0, len = array.length; i < len; i++) {
//   array[i] = 1
// }
array.forEach((item, index, arr) => {
  arr[index] = 1
})
console.log(array) // 输出为空，原因？？？

// //关于form函数中参数的运用
// let array = Array.from({ length: 5 }, function () { return 1 })
// console.log(array)
// {0:'a',1:'b',length:2}