// let arr = ['hello', 'world']
// let firstName = arr[0]
// let surName = arr[1]
// console.log(firstName, surName)
// let arr1 = ['hello', 'world']
// let [firstName1, surName1] = arr1
// console.log(firstName1, surName1)
// // Array|Object
// let arr2 = ['a', 'b', 'c', 'd']
// let [firstName2,, thirdName2] = arr2
// console.log(firstName2, thirdName2)
// let arr3 = 'abcd'
// let [firstName3,, thirdName3] = arr3
// console.log(firstName3, thirdName3)
// let [firstName4,, thirdName4] = new Set([1, 2, 3, 4])
// console.log(firstName4, thirdName4)





let user = { name: 's', surname: 't' };  // ;不可省略
[user.name, user.surname] = [1, 2]
console.log(user)
let arr = ['hello', 'world']
for (let i = 0, item; i < arr.length; i++) {
  item = arr[i]
  console.log(item)
}
for (let [k, v] of Object.entries(user)) {
  // 隐式赋值，显示索引
  // arr[1]
  console.log(k, v)
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let [firstName, curName, ...last] = arr1
console.log(firstName, curName, last)
let arr2 = []
let [firstName1 = 'hello', curName1, ...last1] = arr2
console.log(firstName1, curName1, last1)  // hello undefined []
