function f (x, y, z) {
  if (y === undefined) {
    y = 7
  }
  if (z === undefined) {
    z = 42
  }
  return x + y + z
}
console.log(f(1))
console.log(f(1, 8))
console.log(f(1, 8, 43))