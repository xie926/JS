// Set
let s = new Set()  
// let s = new Set([1, 2, 3, 4]) // 传入的参数是可遍历对象
// s.add('hello')
// s.add('goodbye')
s.add('hello').add('goodbye').add('hello')
// s.delete('hello')   // 以值删除
// s.clear()      // 清空set对象内容
console.log(s)
console.log(s.has('hello2'), s.size)
console.log(s.keys())
console.log(s.values())
console.log(s.entries())
s.forEach(item => {
  console.log(item)
})
for (let item of s) {
  console.log(item)
}