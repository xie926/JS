// for 循环
const arr = [1, 2, 3, 4, 5]
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 2) {
    continue
  }
  console.log(arr[i])
}


// forEach
arr.forEach(function (item) {
  if (item === 2) {
    // continue
  }
  console.log(item)
})


// every
arr.every(function (item) {
  if (item === 2) {

  } else {
    // console.log(item)
  }
  return true
})

// for in
// arr.a = 8
for (let index in arr) {
  if (index * 1 === 2) {
    continue
  }
  // console.log(index, arr[index])
}
// 特别注意arr代表的是对象，arr数组之所以可以被遍历就是因为Array也是一个对象，并且index的数据类型是字符串，当遍历数组的时候要把他转化为数字，=== 的结果才会返回true，因为==比较的是值是否相等，===比较的是值与数据类型是否都相等