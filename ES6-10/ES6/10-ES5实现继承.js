var Animal = function (type) {
  this.type = type
}

Animal.prototype.eat = function () {
  Animal.walk()
  console.log('i am eat food hello')
}

Animal.walk = function () {
  console.log('i am walking')
}

var Dog = function (type) {
  // 初始化父类的构造函数
  Animal.call(this, type)
  this.run = function () {
    console.log('i can run')
  }
}
// // 值类型，引用类型
// Dog.prototype = Animal.prototype   // 这样直接赋值会有问题,如果修改了子原型对象,父原型对象也会跟着一起变化

Dog.prototype = new Animal()
Dog.prototype.costructor = Dog // 因为new Animal() 是一个对象，这样会覆盖Dog之前的prototype，从而constructor的指向也改变了，变成了Animal，故而要将其指回Dog

var dog = new Dog('dog')
dog.eat()
