// let map = new Map([[1, 2], [3, 4]])
let map = new Map()

map.set(10, 2)
map.set(3, 'value-4')
map.set(1, 'value-3')
// map.delete(1)   // 删除索引
// map.clear()
console.log(map.size)
console.log(map.has(2))
console.log(map.get(1))
console.log(map.keys(), map.values(), map.entries())
map.forEach((value, key) => {
  console.log(value, key)
})
for (let [key, value] of map) {
  console.log(key, value)
}
let o = function () {
  console.log('o')
}
map.set(o, 4)
console.log(map.get(o))
