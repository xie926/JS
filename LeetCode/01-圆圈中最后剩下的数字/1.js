var lastRemaining = function(n, m) {
  let result = 0;
  for(let i = 2; i <= n; i++) {
      result = (m + result) % i;
      console.log(result)
  }
  return result
};


console.log(lastRemaining(10,17))