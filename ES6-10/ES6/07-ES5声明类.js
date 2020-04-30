var Animal = function (type) {
  this.type = type
}

Animal.prototype.eat = function () {
  console.log('i am eat food hello')
}

var dog = new Animal('dog')
var monkey = new Animal('monkey')

console.log(dog)
console.log(monkey)

monkey.constructor.prototype.eat = function () {
  console.log('error')
}

dog.eat()
monkey.eat()
