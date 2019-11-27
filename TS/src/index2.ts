// const add : (a:number,b:number) => // 函数
//  number = (a: number,b: number) => a + b  // 函数体

// const add = (a: number,b = 10) => a + (b ? b : 0)

// const add = (a:number,...rest: number[]) => rest.reduce((a,b) => a + b)

// console.log(assigned(1,2))

// 重载
// interface Direction {
//   top: number,
//   right: number,
//   bottom: number,
//   left: number
// }
// function assigned(all:number):Direction 
// function assigned(topAndBottom: number,leftAndRight: number):Direction 
// function assigned(top: number,right: number,bottom: number,left: number):Direction
// // 代码实现函数不可被调用
// function assigned(a: number,b?:number,c?:number,d?:any) {
//   if (b === undefined && c === undefined && d === undefined) {
//     b = c = d = a
//   } else if (c === undefined && d === undefined) {
//     c = a
//     d = b
//   }
//   return {
//     top: a,
//     right: b,
//     bottom: c,
//     left: d
//   }
// }
// console.log(assigned(1,2,3,4))

// function returnItem(para: number): number {
//   return para
// }

// function returnItem<T>(para: T): T {
//   return para
// }

// function swap<T,U>(tuple: [T,U]): [U,T] {
//   return [tuple[1], tuple[0]]
// }

// // 泛型变量
// function getArrayLength<T>(arg: Array<T>): Array<T> {
//   console.log((arg as Array<any>).length)
//   return arg
// }

// // 泛型接口
// interface ReturnItemFn<T>{
//   (para: T): T
// }

// const ReturnItem: ReturnItemFn<number> = para => para

// // 泛型类
// class Stack<T>{
//   // private arr: number[] = []
//   private arr: T[] = []

//   // public push(item: number){
//   //   this.arr.push(item)
//   // }
//   public push(item: T){
//     this.arr.push(item)
//   }

//   public pop() {
//     this.arr.pop()
//   }
// }

// // 泛型约束
// type Params = number | string
// class Stack<T extends Params>{
//   private arr: T[] = []
//   public push(item: T){
//     this.arr.push(item)
//   }

//   public pop() {
//     this.arr.pop()
//   }
// }
// const stack1 = new Stack<string>()
// const stack2 = new Stack<boolean>()

// 使用多重类型进行泛型约束
interface firstInterface {
  doSomething(): number
}
interface secondInterface {
  doSomethingElse(): string
}

// class Demo<T extends firstInterface, T extends secondInterface> {
//   private test: T
//   useT() {
//     this.test.doSomething()
//     this.test.doSomethingElse()
//   }
// }

// interface ChildInterface extends firstInterface,secondInterface{

// }
// class Demo<T extends ChildInterface>{
//     private test: T

//     useT(){
//       this.test.doSomething()
//       this.test.doSomethingElse()
//     }
// }


// new
function factory<T>(type:{new(): T}):T {
  return new type()
}
