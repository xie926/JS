class Tab {
  constructor(id){
    this.main = id
    this.add = this.main.querySelector('.tabadd')
    this.ul = this.main.querySelector('ul')
    this.fsection = this.main.querySelector('.tabscon')
    this.init()
  }
  init(){
    this.lis = this.main.querySelectorAll('.fisrstnav ul li')
    this.sections = this.main.querySelectorAll('section')
    this.remove = this.main.querySelectorAll('ul span:last-child')
    this.spans = this.main.querySelectorAll('ul span:first-child')
    console.log(this.spans)
    this.add.onclick = this.addTab.bind(this)
    for(let i = 0; i < this.lis.length; i++){
      this.lis[i].setAttribute('data-index', i)
      this.lis[i].onclick = this.toggleTab.bind(this, this.lis[i])
      this.remove[i].onclick = this.removeTab.bind(this, this.remove[i])
      this.spans[i].ondblclick = this.changeTab.bind(this, this.lis[i])
    }
  }
  clearClass(){
    for(let i = 0; i < this.lis.length; i++){
      this.lis[i].className = ''
      this.sections[i].className = ''
    }
  }
  toggleTab(that){
    console.log(that.getAttribute('data-index'))
    this.clearClass()
    that.className = 'liactive'
    this.sections[that.getAttribute('data-index')].className = 'conactive'
  }
  addTab(){
    this.clearClass()
    var li = document.createElement('li')
    li.innerHTML = '<span>新选项卡</span><span class="iconfont icon-guanbi"></span>'
    var section = '<section class="conactive">'+Math.random()+'</section>'
    li.className = 'liactive'
    this.ul.appendChild(li)
    this.fsection.insertAdjacentHTML('beforeend', section)
    this.init()
  }
  removeTab(that,e){
    // console.log(that)
    e.stopPropagation()
    var index = that.parentNode.getAttribute('data-index')
    console.log(index)
    this.ul.removeChild(this.lis[index])
    this.sections[index].remove()
    this.init()
    index--
    // this.clearClass()
    // this.lis[index].className = 'liactive'
    // this.sections[index].className = 'conactive'
    if(document.querySelector('.liactive')) return;
    this.lis[index] && this.lis[index].click()
  }
  changeTab(that){
    var value = that.children[0].innerHTML
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
    that.children[0].innerHTML = "<input type='text' />"
    var input = that.children[0].children[0]
    input.value = value
    input.select()
    input.addEventListener('blur', function(){
      that.children[0].innerHTML = this.value
    })
    input.onkeyup = function(e){
      if(e.keyCode === 13){
        this.blur()
      }
    }
  }
}


var main = document.getElementById('tab')
var tab = new Tab(main)