function f1 (x, y = 7, z = 42) {
  return x + y + z
}
console.log(f1(1))
console.log(f1(1, 2, undefined, undefined))
console.log(f1(1, 2, 3, undefined))
console.log(f1(1, 2, 3, 4))

// 获取参数长度---------arguments在es6中已经被废除
function f2 (x, y = 7, z = x + y) {
  console.log(Array.from(arguments))
  return x * 10 + z
}
console.log(f2(1, 2, undefined, 4))
console.log(f2(1, 2, 3, 4))

// 获取参数长度二---------f3.length返回的是没有默认值的参数长度
function f3 (x, y = 7, z = x + y) {
  console.log(f3.length)
  return x * 10 + z
}
console.log(f2(1, 2, undefined, 4))
console.log(f3(1, 2, 3, 4))