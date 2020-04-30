let array = [1,2,3,4,5]
let find1 = array.filter(function (item) {
  return item % 2 === 0
})
console.log(find1) // [2,4]


// Array.prototype.find  找到即停止
let find2 = array.find(function (item) {
  return item % 2 === 0
})
console.log(find2)
// Array.prototype.findIndex 找到即停止
let find3 = array.findIndex(function (item) {
  return item % 2 === 0
})
console.log(find3)