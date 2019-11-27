// 类型断言
// const person = {}
// person.name = 'xiaomuzhu'
// person.age = 20

// interface Person {
//   name: string
//   age: number
// }
// // const person = {} as Person
// // person.name = 'xiaomuzhu'
// // person.age = 20


// // const person: Person = {
// //   name: 'xiaomuzhu',
// //   age: 20
// // }

// // 双重断言
// const person = 'abc' as any as Person
// // person.name = 'xiaomuzhu'

// 类型守卫
// instanceof
// class Person {
//   name = 'wn'
//   age = 20
// }

// class Animal{
//   name = 'petty'
//   color = 'pink'
// }

// function getSomething(arg: Person | Animal){
//   if(arg instanceof Animal) {
//     console.log(arg.color)
//     console.log(arg.age)
//   }
//   if(arg instanceof Person) {
//     console.log(arg.color)
//     console.log(arg.age)
//   }
// }

// in
class Person {
  name = 'wn'
  age = 20
}

class Animal{
  name = 'petty'
  color = 'pink'
}

function getSomething(arg: Person | Animal){
  if('age' in arg) {
    console.log(arg.color)
    console.log(arg.age)
  }
  if('color'in arg) {
    console.log(arg.color)
    console.log(arg.age)
  }
}

// 字面量类型守卫
type Foo = {
  kind: 'foo';
  foo: number
}
type Bar = {
  kind: 'bar'
  bar: number
}

function doStuff(arg: Foo | Bar){
  if(arg.kind === 'bar'){
    console.log(arg.foo)
    console.log(arg.bar)
  }
  else{
    console.log(arg.foo)
    console.log(arg.bar)
  }
}