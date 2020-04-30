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

class Dog extends Animal {
  // 显式，隐式
  constructor (type) {
    super(type)
    this.age = 2
  }
}

let dog = new Dog('dog')
dog.eat()
