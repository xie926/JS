var sortArray = function(nums) {
  let temp;
  for(let i = 0; i<nums.length; i++){
      for(let j=0; j<nums.length-1; j++){
          if(nums[j]>nums[j+1]){
              temp = nums[j]
              nums[j] = nums[j+1]
              nums[j+1] = temp
          }
      }
  }
  return nums
};