let x = 1
let y = 2
let z = 3
let obj = {
  'x': x,
  y,
  [z + y]: 6,
  * hello () {
    console.log('hello2')
  }
}
// obj[key] = value ES5
// function* functionName() {
//
// }
obj.hello()
