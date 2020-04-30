// for of
for (let item of arr) {
  console.log(item)
}

const Price = {
  A: [1.5, 2.3, 4.5],
  B: [3, 4, 5],
  C: [0.5, 0.8, 1.2]
}

for (let key in Price) {
  console.log(key, Price[key])
}