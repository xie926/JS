from typing import List
class Solution:
  def removeDuplicates(self, nums: List[int]) -> int:
    if nums:
      array = [nums[0]]
      slow = 0
      for fast in range(1, len(nums)) :
        if nums[slow] != nums[fast] :
          slow += 1
          nums[slow] = nums[fast]
          array.append(nums[slow])
      return (slow + 1)
      # return array
    else:
      return 0


x = Solution()
print(x.removeDuplicates([0,0,1,1,1,2,2,3,3,4]))