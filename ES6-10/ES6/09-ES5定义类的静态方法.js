// ES5
var Animal = function (type) {
  this.type = type
}

Animal.prototype.eat = function () {
  Animal.walk() // 不能用this.walk()调用，因为静态方法的调用对象是构造函数，而非实例对象
  console.log('i am eat food hello')
}
// Animal定义静态方法
Animal.walk = function () {
  console.log('i am walking')
}
var dog = new Animal('dog')
dog.eat()   // 'i am walking'  'i am eat food hello'
dog.walk()  // 报错，因为静态方法是挂载在构造函数上，不能通过实例对象对静态方法进行调用