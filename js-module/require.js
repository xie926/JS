// import Vue from 'vue'
// es-module 必须把import写到头部

// 写在头部的好处：  能够在代码 代码静态分析的时候 就知道 你导入了哪些模块
// 出现在逻辑分析的时候：  不知道条件是否成立
// three-shaking  
// if (false) {
  
// }
// import {add , reduce}
// add(1,2)
var { counter, obj, changeValue} = 
require('./export.js');4
// common js 可以随意写在自己需要的位置     按需加载
if (true) {
  if (true) {
    require('./export.js');
  }
}
// 3  {}
console.log(counter, obj);
changeValue();
// 3 变了
// es-module 4 { name: Tom } 都是引用
console.log(counter, obj);
// 复制
// var a = 1; var b = a; a = 2;
// var aa = {}; var bb = aa; aa.name = 'bbname';
// commonJS require 的时候 类比 js 
// 基本数据类型 复杂数据类型 的复制,
// 它也就是 复制了一份导出来的东西
