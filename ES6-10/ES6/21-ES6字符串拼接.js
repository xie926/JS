const a = 20
const b = 10
const c = 'javascript'

const str1 = 'my age is' + (a + b) + 'i love' + c  // ES5
console.log(str1)
const str2 = `my age is ${a + b} i love ${c}`  // ES6
console.log(str2)

const retailPrice = 20
const wholeSalePrice = 16
const type = 'retail'
let showTxt = ''
if (type === 'retail') {
  showTxt = '您此次的购买单价是：' + retailPrice
} else {
  showTxt = '您此次的购买的批发价是：' + wholeSalePrice
}
console.log(showTxt)

function Price (strings, type) {
  let s1 = strings[0]
  const retailPrice = 20
  const wholeSalePrice = 16
  let showTxt
  if (type === 'retail') {
    showTxt = '购买单价是：' + retailPrice
  } else {
    showTxt = '购买的批发价是：' + wholeSalePrice
  }
  return `${s1}${showTxt}`
}

let showTxt = Price`您此次的${'retail'}`
console.log(showTxt)

let s1 = `我是第一行


我是第二行`

console.log(s1)
