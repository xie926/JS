var removeDuplicates = function(nums) {
  const size = nums.length; // 原数组的长度
  let slowP = 0; //慢指针
  array = [nums[0]];
  for (let fastP = 1; fastP < size; fastP++ )  {  // 快指针
    // console.log(nums[fastP]);
    if (nums[fastP] !== nums[slowP]) { //从同一个位置0 
      slowP++; //不一样
      // slowP 挪窝了， 新的位置要确立新的数， cur 指向的数 
      nums[slowP] = nums[fastP]; //设置每个位置，不重复的数 确立了地位
      array.push(nums[slowP])
    }
  }
  // return slowP + 1; // slowP停下来的地方
  return array; // 返回符合题目要求的数组
}

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
