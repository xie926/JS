# 删除有序数组中的重复项
前端容易入门， 
我出身不好， 教养也差， 但一直努力尝试去做一个体面的人。 

读题：
  sortedArr [1,1,2] 3  
  return length  2

- 一次遍历， ？
  res []   空间复杂度 O(n)
  for 
  排好序 后面的项一定会大于或等于前面的荐 
  等于要原地删除的
  res  length 
  抽象， 数理逻辑 
- 动图
  https://github.com/MisterBooo/LeetCodeAnimation/blob/master/notes/LeetCode%E7%AC%AC26%E5%8F%B7%E9%97%AE%E9%A2%98%EF%BC%9A%E5%88%A0%E9%99%A4%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E9%87%8D%E5%A4%8D%E9%A1%B9.md
  两个指针  pre cur
  cur 一址在往前跑 一次循环的每一项遍历
  pre 后面追
  pre cur  arr 前一个， 后一个 
  不等于时pre+1, 
  相等时 pre 不走， 会慢下来， 
  如果cur pre不一样， 那么 pre+ 1  值得于 cur 
  牛， 从头到尾都是排好序的不重复数
  每个位置放什么数？ 
  pre 指针 没有跟上cur 的速度， 表示有重复 
  pre cur  n个空位
  pre + 1 删除， 把当前cur的值 交给 pre

  - 快慢指针
    1. 一次循环 cur++ 一直跑
    2. cur 跟pre arr[] 不等的话， 
      cur++ pre++ 
      相等的话  pre 不动
    3. cur 再走的时候， 继续比较
      新的cur 跟旧的pre 
      不等时， pre++ 并且把 cur值给 新的pre
      把因为之前重复空出来的位置 给填上。 
    4. cur > length 

- 数据结构 链表
  [1,1,2] 链表
  LinkedList   next 
  1  1  1 next 指向1， 改成指向2 

  把数组要维持位置 快慢指针好理解的多
