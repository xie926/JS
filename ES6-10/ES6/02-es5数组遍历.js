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
