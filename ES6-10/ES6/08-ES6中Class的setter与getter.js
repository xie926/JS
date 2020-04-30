let _age = 4
class Animal {
  constructor (type) {
    this.type = type
  }
  get age () {
    return _age
  }
  set age (val) {
    if (val < 7 && val > 4) {
      _age = val
    }
  }
  eat () {
    console.log('i am eat food')
  }
}
let dog = new Animal('dog')
console.log(dog.age) // 4
dog.age = 8
console.log(dog.age)   // 4
dog.age = 5
console.log(dog.age)   // 5
console.log(dog._age)  // undefind 