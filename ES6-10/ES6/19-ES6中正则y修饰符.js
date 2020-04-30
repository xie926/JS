const s = 'aaa_aa_a'
const r1 = /a+/g // ^ $
const r2 = /a+/y

console.log(r1.exec(s))  // aaa
console.log(r2.exec(s))  // aaa
//
// console.log(r1.exec(s))  // aa
// console.log(r2.exec(s))  // null


// y => sticky 它的意思是要从刚开始的位置连续匹配
// g => global 它的意思是全局匹配到就可
