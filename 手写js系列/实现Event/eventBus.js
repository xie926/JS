// 发布订阅
class EventEmitter {
  constructor () {
    this.events = this.events || new Map()
  }
  addListener (type, fn) { // 监听事件
    if(!this.events.get(type)) {
      this.events.set(type, fn)
    }
  }

  emit (type) { // 触发事件
    let handle = this.events.get(type)
    handle.apply(this, [...arguments].slice(1))
  }
}

let emitter = new EventEmitter()
emitter.addListener('ages', age => {
  console.log(age);
})

emitter.emit('ages', 18)
