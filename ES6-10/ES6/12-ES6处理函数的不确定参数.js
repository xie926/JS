function sum (base, ...nums) {
  // Rest parameter
  let num = 0
  nums.forEach(function (item) {
    num += item * 1
  })
  return base * 2 + num
}
console.log(sum(1, 2, 3))
