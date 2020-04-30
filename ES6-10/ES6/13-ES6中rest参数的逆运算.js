function sum (x = 1, y = 2, z = 3) {
  return x + y + z
}
let data = [4, 5, 9]
// console.log(sum(data[0], data[1], data[2]))
// console.log(sum.apply(this, data))
// spread
console.log(sum(...data))

