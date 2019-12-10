// [1,[2,[3,4]]]
// [1,2,3,4]


function flat(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flat(arr[i]))
    }
    else{
      res.push(arr[i])
    }
  }
  return res
}

arr = [1, [2, [3, 4]]]
console.log(flat(arr))