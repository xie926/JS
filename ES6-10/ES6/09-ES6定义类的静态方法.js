// ES6
class Animal {
  constructor (type) {
    this.type = type
  }
  eat () {
    Animal.walk()
    console.log('i am eat food')
  }
  static walk () {
    console.log('i am walking')
  }
}
let dog = new Animal('dog')
dog.eat()

