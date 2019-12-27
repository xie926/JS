parseToMoney(1234.56) // 1.234.56
parseToMoney(123456789) //123.456.789
parseToMoney(13242513013) // 13.242.513.013
// function parseToMoney(num) {
//   num = parseFloat(num.toFixed(3))
//   // console.log(num)
//   let [integer, decimal] = String.prototype.split.call(num,".")
//   // console.log(integer,decimal) 
//   integer = integer.replace(/\d(?=(\d{3})+$)/g,'$&,')
//   console.log(integer)
//   return integer + '.' + (decimal? decimal: '')
// }

function parseToMoney(str){
  let re = /(?=(?!\b)(\d{3})+$)/g
  str = str.toString()
  return str.replace(re, ',')
}
console.log(parseToMoney(123456))
