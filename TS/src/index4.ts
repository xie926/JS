// 装饰器 (decorator)
// class Person {
//     say () {
//         console.log('hello')
//     }
// }
// function Person() {}
// Object.defineProperty(Cat.prototype,'say',{
//     value: function () { console.log('hello') },
//     enumerable: false,
//     configurable: true,
//     writable:true
// })

// 类装饰器
// function addAge(constructor: Function) {
//     constructor.prototype.age = 18
// }

// @addAge
// class Person1 {
//     name: string;
//     age?: number;
//     constructor() {
//         this.name = 'wn'
//     }
// }
// let person = new Person1()

// console.log(person.age)

// Person =addAge(function Person() {...})

// 属性/方法 装饰器
// 声明装饰器修饰方法、属性
// function method(target: any,propertyKey:string,descriptor:PropertyDescriptor) {
//     console.log(target)
//     console.log('prop'+propertyKey)
//     console.log('desc'+JSON.stringify(descriptor)+'\n\n')
//     descriptor.writable = true
// }

// class Person1 {
//     name: string;
//     constructor () {
//         this.name = 'wn'
//     }
//     @method
//     say () {
//         return 'instance method'
//     }   
//     @method
//     static run() {
//         return 'static method'
//     }
// }

// const abc = new Person1()

// abc.say = function() {
//     return 'edit'
// } 

// console.log(abc.say())


// 参数装饰器
function logParameter(target: Object, propertyKey: string, index: number) {
    console.log(target, propertyKey, index)
}
class Person1 {
    greet(message: string,@logParameter name:string): string {
        return `${message} ${name}`
    }
}
const p =new Person1()
console.log(p.greet('hello','wn'))