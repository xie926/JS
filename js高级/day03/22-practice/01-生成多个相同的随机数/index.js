function getRandomNum(){
  var num = Math.floor(Math.random()*10)+1
  return function(){
    return num
  }
}

var fn = getRandomNum()

console.log(fn());
console.log(fn());
console.log(fn());
