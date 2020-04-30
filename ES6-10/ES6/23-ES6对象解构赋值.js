let options = {
  title: 'menu',
  // width: 100,
  height: 200
}

let { title: title2, width = 130, height } = options
console.log(title2, width, height)
let options = {
  size: {
    width: {
      size: {
        width: 200
      }
    },
    height: 200
  },
  items: ['Cake', 'Donut'],
  extra: true
}

let { size: { width: width2, height }, items: [, item2], extra } = options
console.log(width2, height, item2, extra)
