function sum () {
  let num = 0
  Array.prototype.forEach.call(arguments, function (item) {
    num += item * 1
  })
  // Array.from(arguments).forEach(function (item) {
  //   num += item * 1
  // })
  return num
}
console.log(sum(1, 2, 3))
