function pack(weight, value, capacity, n) {
  let T = []
  for (let i = 0; i < n; i++){
    T[i] = []
    for(let j = 0; j <= capacity; j++){
      if( j === 0 ){ // 容量为0
        T[i][j] = 0;
        continue;
      }
      if( j < weight[i]){ // 容量小于物品重量
        if(i === 0){
          T[i][j] = 0;
        }else{
          T[i][j] = T[i-1][j];
        }
        continue;
      }
      if( i === 0){
        T[i][j] = value[i]
      }else{
        T[i][j] = Math.max(value[i] + T[i-1][j-weight[i]], T[i-1][j])
      }
    }
  }
  console.log(123, T)
  findValue(weight, value, capacity, n, T)
  return T
}

function findValue(weight, value, capacity, n, T){
  var i = n-1, j = capacity;
  while(i>0 && j>0){
    if(T[i][j] != T[i-1][j]){
      console.log('选择物品' + i + '，重量' + weight[i] + '，价值' + value[i])
      j = j - weight[i]
      i--
    }else{
      i--
    }
  }
  if(i === 0){
    if(T[i][j] != 0){
      console.log('选择物品' + i + '，重量' + weight[i] + '，价值' + value[i])
    }
  }
}

var weights = [2, 3, 4],
    values = [3, 4, 5],
    capacity = 5,
    n = 3
pack(weights, values, capacity, n)
