let arr = [13, 1, 2, 5, 3, 0, 11, 7]
let sum = 10

function findSum1(arr, sum){
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    // arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] + arr[j] === sum){
        console.log(i,j,arr[i],arr[j])
      }
    }
  }
}
findSum1(arr, sum)      // 时间复杂度为O(n^2)

function findSum2(arr, sum){
  let obj = {}
  arr.forEach((v,i) => {
    if(String(v) in obj){
      console.log("找到了", obj[v], i)
    }
    obj[sum - v] = i
  })
}
findSum2(arr, sum)