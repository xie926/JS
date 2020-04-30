class Animal {
  constructor (type) {
    this.type = type
  }
  eat () {
    console.log('i am eat food')
  }
}

let dog = new Animal('dog')
let monkey = new Animal('monkey')
console.log(dog)
console.log(monkey)
dog.eat()
monkey.eat()
console.log(typeof Animal)  // Function

class关键字是