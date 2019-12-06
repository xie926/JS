const debounce = (fn, delay = 500) => {
  let time = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, ...args)
    }, delay)
  }
}

// 最简单的防抖函数，可以创建一个html文件试运行一下