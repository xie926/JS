// 1. 解析Parse：将代码解析生成抽象语法树（AST），即词法分析和语法分析
// 2. 转换：对于AST进行变换一系列的操作，babel接受到的AST通过babel-traverse对其进行遍历
//          在此过程中进行添加、更新、及删除等操作
// 3. 生成：将变换后的AST再转换为js代码，使用的模板是babel-generator




// const result = 1 + 2 + 3 + 4 + 5
// const result = 15

var babel = require('babel-core')
var t = require('babel-types')

var babel = require('babel-core');
var t = require('babel-types');

const visitor = {
  BinaryExpression(path) {
    const node = path.node;
    let result;
    // 判断表达式两边，是否都是数字
    if (t.isNumericLiteral(node.left) && t.isNumericLiteral(node.right)) {
      // 根据不同的操作符作运算
      switch (node.operator) {
        case "+":
          result = node.left.value + node.right.value;
          break
        case "-":
          result = node.left.value - node.right.value;
          break;
        case "*":
          result =  node.left.value * node.right.value;
          break;
        case "/":
          result =  node.left.value / node.right.value;
          break;
        case "**":
          let i = node.right.value;
          while (--i) {
            result = result || node.left.value;
            result =  result * node.left.value;
          }
          break;
        default:
      }
    }

    // 如果上面的运算有结果的话
    if (result !== undefined) {
      // 把表达式节点替换成number字面量
      path.replaceWith(t.numericLiteral(result));

      let parentPath = path.parentPath
      // 向上遍历父节点
      parentPath && visitor.BinaryExpression.call(this, parentPath)
    }
  }
};

module.exports = function (babel) {
  return {
    visitor
  };
}
