const target = {
  a: {
    b: {
      c: {
        d: 9
      }
    },
    e: 5,
    f: 6,
    h: 10
  },
  z: 10
}
const source = {
  a: {
    b: {
      c: {
        d: 1
      }
    },
    e: 2,
    f: 3
  }
}
Object.assign(target, source)

console.log(target)

// Object.assign是浅拷贝，浅拷贝对简单类型的数据是值拷贝，对引用对象的数据是地址拷贝，故而target.a被指向了source.a的地址，故而target.h发生丢失
// WeakSet,WeakMap