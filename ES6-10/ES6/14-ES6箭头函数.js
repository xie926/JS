// function hello () {}
// var hello = function () {}
let sum = (x, y, z) => {
  return {
    x: x,
    y: y,
    z: z
  }
}
console.log(sum(1, 2, 4))

let test = {
  name: 'test',
  say: () => {
    console.log(this.name, this)
  }
}
test.say()